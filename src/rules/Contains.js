/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class Contains {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor(params) {
    this.expectedValues = params;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'contains';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return this.expectedValues.some((expectedValue) => String(value).includes(expectedValue));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(Contains.name(), 'Invalid');
  }
}
