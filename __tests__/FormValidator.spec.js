import FormValidator from '../src/FormValidator';
import rules from '../src/rules';

describe('Static FormValidator', () => {
  FormValidator.$withRule(...rules);

  test('should swap placeholders correctly', () => {
    const dob = 'Date of birth';

    FormValidator.$withPlaceholders({ dob });

    expect(FormValidator.$placeholder('dob')).toBe(dob);
  });

  test('placeholder method should return same attribute name as default', () => {
    expect(FormValidator.$placeholder('account_number')).toBe('account_number');
  });

  /*
  |--------------------------------------
  | Translation Methods Test
  |--------------------------------------
   */
  test('should add rule translation correctly', () => {
    const test = 'This is a test translation message.';

    FormValidator.$withTranslations({ test });

    expect(FormValidator.$translation('test')).toBe(test);
  });

  test('translation method should return default translation if message not found', () => {
    const expected = 'Invalid value for this field';

    expect(FormValidator.$translation('unkown', expected)).toEqual(expected);
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

    FormValidator.$withRule(customRule1, customRule2);

    expect(FormValidator.$findRule('customRule1').name()).toBe(customRule1.name());
    expect(FormValidator.$findRule('customRule2').name()).toBe(customRule2.name());
  });

  test('should validate form correctly', () => {
    const testRule1 = class {
      static name() {
        return 'test_rule1';
      }

      passes(value) {
        return value === 'test';
      }

      message() {
        return 'Validation failed';
      }
    };

    FormValidator.$withRule(testRule1);

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

    const result = FormValidator.$validate(data, fields);

    expect(result.invalid).toBeTruthy();
    expect(Object.keys(result.errors).length).toEqual(1);
  });

  test('should validate form will callback rule', () => {
    const data = {
      name: 'testname',
      email: 'testemail'
    }

    const fields = {
      name: {
        rules: [function (value, data, attribute) {
          return value === 'testname' && data.email === 'testemail' && attribute === 'name';
        }],
        attribute: 'name'
      },
      email: {
        rules: [function () {
          return 'Invalid email';
        }],
        attribute: 'email'
      }
    };

    const result = FormValidator.$validate(data, fields);
    expect(result.invalid).toBeTruthy();
    expect(Object.keys(result.errors).length).toEqual(1);
    expect(result.errors.email).toBe('Invalid email');
  });

  test('should extract rule parameters correctly', () => {
    const rule = 'required_if:name,victor';
    const parameter = FormValidator.$ruleParameters(rule);

    expect(typeof parameter).toBe('object');
    expect(parameter).toContain('name');
    expect(parameter).toContain('victor');
  });

  test('rule parameters should return empty array when no parameters are set.', () => {
    const rule = 'required';
    const parameter = FormValidator.$ruleParameters(rule);

    expect(typeof parameter).toBe('object');
    expect(parameter.length).toEqual(0);
  });
});

describe('Instantiated FormValidator', () => {
  const {
    formName,
    field,
  } = require('./dom/form');

  const validator = new FormValidator();

  test('should setup validator form element as selector', () => {
    const el = document.querySelector(`[name=${formName}]`);
    const instance = new FormValidator(el);

    expect(instance.$form.name).toBe(formName);
  });

  test('should assign our test form to its $form variable', () => {
    expect(validator.$form.name).toBe(formName);
  });

  test('should assign our test form field to its field variable', () => {
    const validatorField = validator.$fields[field.name];

    expect(validatorField).toBeDefined();
    expect(validatorField.rules.join('|')).toBe(field.rules);
    expect(validatorField.feedbackEl.id).toBe(field.feedbackId);
  });

  test.todo('should validate submitted form correctly');
});
