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
