import FormValidator from '../src/FormValidator';

describe('Static FormValidator', () => {
  test('should swap placeholders correctly', () => {
    const dob = 'Date of birth';

    FormValidator.withPlaceholders({ dob });

    expect(FormValidator.placeholder('dob')).toBe(dob);
  });

  test('placeholder method should return same attribute name as default', () => {
    expect(FormValidator.placeholder('account_number')).toBe('account_number');
  });

  test('should add rule messages correctly', () => {
    const required = 'The :attribute is required';

    FormValidator.withRuleMessages({ required });

    expect(FormValidator.ruleMessage('required')).toBe(required);
  });

  test('should register custom rules correctly', () => {
    const customRule1 = class {
      static name() {
        return 'customRule1';
      }
    }

    const customRule2 = class {
      static name() {
        return 'customRule2';
      }
    }

    FormValidator.withRules(customRule1, customRule2);

    expect(FormValidator.findRule('customRule1').name()).toBe(customRule1.name());
    expect(FormValidator.findRule('customRule2').name()).toBe(customRule2.name());
  });

  test('should validate form correctly', () => {
    const testRule1 = class {
      static name() {
        return 'test_rule1';
      }

      static passes(value) {
        return value === 'test';
      }

      static message() {
        return 'Validation failed';
      }
    };

    FormValidator.withRules(testRule1);

    const data = {
      name: 'test',
      email: 'not test',
    }

    const fields = {
      name: {
        rules: ['test_rule1'],
        attribute: 'name'
      },
      email: {
        rules: ['test_rule1'],
        attribute: 'email'
      }
    };

    const result = FormValidator.validate(data, fields);

    expect(result.invalid).toBeTruthy()
    expect(Object.keys(result.errors).length).toEqual(1);
  });
});

describe('Instantiated FormValidator', () => {
  const {
    formName,
    field,
  } = require('./dom/form');

  const validator = new FormValidator();

  test('should assign our test form to its $form variable', () => {
    expect(validator.$form.name).toBe(formName);
  });

  test('should assign our test form field to its field variable', () => {
    const validatorField = validator.$fields[field.name];

    expect(validatorField).toBeDefined();
    expect(validatorField.rules.join('|')).toBe(field.rules);
    expect(validatorField.feedbackEl.id).toBe(field.feedbackId);
  });
});
