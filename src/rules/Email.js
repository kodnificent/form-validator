/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class Email {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'email';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return /^\w+@\w+\.\w{2,}$/.test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(Email.name(), 'Invalid');
  }
}
