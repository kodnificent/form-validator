/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class Digits {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([param1]) {
    this.exactLength = param1;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'digits';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return new RegExp(`^\\d{${this.exactLength}}$`).test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(Digits.name(), 'The :attribute field is invalid');
  }
}
