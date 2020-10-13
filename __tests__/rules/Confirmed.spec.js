import Confirmed from '../../src/rules/Confirmed';

describe('Confirmed rule', () => {
  const rule = new Confirmed();

  test('should fail validation', () => {
    expect(rule.passes('hello', {}, 'password')).toBeFalsy();
    expect(rule.passes('hello', {}, 'password')).toBeFalsy();
    expect(rule.passes('hello', { password_confirmation: 'Hello' }, 'password')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('hello', { password_confirmation: 'hello' }, 'password')).toBeTruthy();
  });
});
