/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class AlphaNum {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'alpha_num';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return Boolean(String(value).match(/^[A-Za-z0-9]+$/));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(AlphaNum.name(), 'Invalid');
  }
}
