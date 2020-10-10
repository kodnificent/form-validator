/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class RuleName {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'rule_name';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value, values) {
    return false;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(RuleName.name(), 'The :attribute field is invalid');
  }
}
