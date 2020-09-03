import validator from './mixins/validator';

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

    this.$selector = selector ?? validator.selector;
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
      Object.keys(this.rules).forEach((name) => {
        const rules = this.rules[name];
        const selector = this.fieldSelector.replace(':attribute', name);

        const data = {
          rules: typeof rules === 'string' ? rules.split('|') : rules,
          el: this.$form.querySelector(selector),
        };

        fields[name] = data;
      });
    } else {
      // alternatively, we search through the html fields for rules.
      [...this.$form.querySelectorAll('[data-rules]')].forEach((el) => {
        const name = el.getAttribute('name');
        // @todo through error if name is null or undefined

        const data = {
          rules: el.getAttribute('data-rules').split('|'),
          el,
        };

        fields[name] = data;
      });
    }

    // next we assign the feedback selector value and query the feedback el to each field.
    Object.keys(fields).forEach((name) => {
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
    if (this.$attachedSubmitEvent || !this.$form) return false;

    this.$form.addEventListener('submit', this.$handleSubmit);

    this.$attachedSubmitEvent = true;

    return this.$attachedSubmitEvent;
  }

  /**
   * Handle the form submit event.
   *
   * @param {Object} event
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
    const validatorOptions = typeof validator.options === 'function' ? validator.options.call(validator) : validator.options;

    return validatorOptions;
  }

  /**
   * Validate data against a set of rules.
   *
   * @param {array} data
   * @param {array} rules
   */
  static validate(data, rules) {
    // const result = {
    //   invalid: false,
    // };

    // data.forEach((data) => {
    //   //
    // });

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
  }

  /**
   * Get the custom rule message for a validation rule.
   *
   * @param {string} name
   */
  static ruleMessage(name) {
    const message = this.$ruleMessages?.[name];

    return message;
  }
}
