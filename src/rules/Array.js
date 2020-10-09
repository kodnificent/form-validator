/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class RuleName {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'array';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    if (!(value instanceof Array)) {
      return false;
    }

    return true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(RuleName.name(), 'Invalid');
  }
}
