/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class In {
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
    return 'in';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return this.expectedValues.includes(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(In.name(), 'Invalid');
  }
}
