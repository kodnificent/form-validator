/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class Accepted {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'accepted';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value) {
    return value === 'yes' || value === 'on' || value === 1 || value === true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(Accepted.name(), 'The :attribute must be accepted.');
  }
}
