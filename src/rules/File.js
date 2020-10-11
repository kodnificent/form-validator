/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';

export default class FileRule {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'file';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return (value instanceof File) || (value instanceof Array && value[0] instanceof File);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(FileRule.name(), 'The :attribute field is invalid');
  }
}
