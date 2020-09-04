import validatorMixin from './mixins/validator';
import coreRules from './rules';

// Note that all protected methods, protected properties
// and static properties should be prepended with $ to enable
// one differentiate core methods or properties from props
// that were merged into the class.

export default class FormValidator {
  /**
   * Create a new form validator instance.
   *
   * @param {string} [selector]
   * @param {Object} [options]
   * @param {Object} options.messages
   * @param {Object} options.placeholders
   * @param {Object|string} options.rules
   * @param {string} options.fieldSelector
   * @param {string} options.feedbackSelector
   * @param {Function} options.beforeValidate
   * @param {Function} options.onInvalid
   * @param {Function} options.validated
   */
  constructor(selector = null, options = {}) {
    // we merge option props into the class
    const mergedOptions = { ...FormValidator.validatorOptions(), ...options };

    Object.keys(mergedOptions).forEach((key) => {
      this[key] = this[key] ?? mergedOptions[key];
    });

    this.$selector = selector ?? validatorMixin.selector;
    this.$form = document.querySelector(this.$selector);

    if (!this.$form) {
      // @todo throw error
      return;
    }

    this.$attachPlaceholders();
    this.$setFields();
    this.$attachSubmitEvent();
  }

  /**
   * Attach form placeholders to the static placeholders.
   */
  $attachPlaceholders() {
    if (this.placeholders) {
      FormValidator.withPlaceholders(this.placeholders);
    }
  }

  /**
   * Assign rules and feedbackSelector to form fields.
   */
  $setFields() {
    const fields = {};

    // first we assign rules and field element to each field
    if (this.rules && typeof this.rules === 'object') {
      // we give precedence to rules property when setting fields
      Object.keys(this.rules).forEach((fieldName) => {
        const rules = this.rules[fieldName];
        const selector = this.fieldSelector.replace(':attribute', fieldName);

        const data = {
          attribute: fieldName,
          rules: typeof rules === 'string' ? rules.split('|') : rules,
          el: this.$form.querySelector(selector),
        };

        fields[fieldName] = data;
      });
    } else {
      // alternatively, we search through the html fields for rules.
      [...this.$form.querySelectorAll('[data-rules]')].forEach((el) => {
        const name = el.getAttribute('name');
        // @todo through error if name is null or undefined

        const data = {
          attribute: name,
          rules: el.getAttribute('data-rules').split('|'),
          el,
        };

        fields[name] = data;
      });
    }
    Object.keys(fields).forEach((name) => {
      // next we assign the feedback selector value
      // and query the feedback el to each field.
      const field = fields[name];
      field.feedbackSelector = this.feedbackSelector.replace(':attribute', name);
      field.feedbackEl = this.$form.querySelector(field.feedbackSelector);
    });

    this.$fields = fields;
  }

  /**
   * Attach submit event listener to the form that requires validation.
   */
  $attachSubmitEvent() {
    this.$attachedSubmitEvent = this.$attachedSubmitEvent ?? false;

    // we check if the submit event hasn't been attached attached
    // to avoid attaching an event twice and also, the form exists.
    if (this.$attachedSubmitEvent || !this.$form) return;

    this.$form.addEventListener('submit', this.$handleSubmit);

    this.$attachedSubmitEvent = true;
  }

  /**
   * Handle the form submit event.
   *
   * @param {Event} event
   */
  $handleSubmit(event) {
    this.beforeValidate.call(this, event);

    const result = FormValidator.validate();

    if (result.invalid) {
      return this.onInvalid.call(this, event, result.errors);
    }

    return this.validated.call(this, result.data);
  }

  /**
   * Get validator options value.
   */
  static validatorOptions() {
    const validatorOptions = typeof validatorMixin.options === 'function' ? validatorMixin.options.call(validatorMixin) : validatorMixin.options;

    return validatorOptions;
  }

  /**
   * Validate form fields against its rules.
   *
   * @param {Object} data
   * @param {Object} fields
   * @param {string} fields.attribute
   * @param {array} fields.rules
   */
  static validate(data, fields) {
    const result = {
      invalid: false,
      errors: {},
      data,
    };

    Object.keys(fields).forEach((name) => {
      const field = fields[name];
      const messages = [];

      field.rules.some((ruleName) => {
        // the bail rule means we should stop validating after first validation.
        if (ruleName === 'bail') return false;

        // note that if the rule does not exist, we still assign an error to the field.
        const validator = FormValidator.findRule(ruleName);

        if (validator?.passes(data[field.attribute])) return false;

        const validatorMessage = validator?.message() ?? 'Invalid rule';

        let message = FormValidator.ruleMessage(ruleName) ?? validatorMessage;
        message = message.replace(':attribute', field.attribute);
        messages.push(message);

        // we stop validating after first validation.
        return field.rules[0] === 'bail' && field.rules[1] === ruleName;
      });

      if (messages.length > 0) result.errors[field.attribute] = messages;
    });

    result.invalid = Object.keys(result.errors).length > 0;

    return result;
  }

  /**
   * Swap attribute placeholders with a more user friendly label
   * such as "First name" in place of "first_name".
   *
   * @param {Object} placeholders
   */
  static withPlaceholders(placeholders) {
    if (!this.$placeholders) {
      this.$placeholders = placeholders;
    }

    this.$placeholders = { ...this.$placeholders, ...placeholders };
  }

  /**
   * Get the placeholder value of an attribute.
   *
   * @param {string} attributeName
   */
  static placeholder(attributeName) {
    const placeholder = this.$placeholders?.[attributeName] ?? attributeName;

    return placeholder;
  }

  /**
   * Swap rule messages with a custom message.
   *
   * @param {Object} messages
   */
  static withRuleMessages(messages) {
    if (!this.$ruleMessages) {
      this.$ruleMessages = messages;
    }

    this.$ruleMessages = { ...this.$ruleMessages, ...messages };

    return this;
  }

  /**
   * Get the custom rule message for a validation rule.
   *
   * @param {string} ruleName
   */
  static ruleMessage(ruleName) {
    const message = this.$ruleMessages?.[ruleName];

    return message;
  }

  /**
   * Add custom validation rules.
   *
   * @param  {...any} rules
   */
  static withRules(...rules) {
    const customRules = this.$customRules ?? [];

    this.$customRules = customRules.concat(rules);

    return this;
  }

  /**
   * Find a rule by name.
   *
   * @param {string} ruleName
   */
  static findRule(ruleName) {
    return this.rules().filter((rule) => rule.name() === ruleName)[0];
  }

  static rules() {
    const customRules = this.$customRules ?? [];
    const rules = coreRules.concat(customRules);

    return rules;
  }
}
