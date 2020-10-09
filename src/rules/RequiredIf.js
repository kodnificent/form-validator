/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';
import Required from './Required';

export default class RequiredIf {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([dependentField, value]) {
    this.other = dependentField;
    this.value = value;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'required_if';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value, values) {
    return values[this.other] === this.value ? (new Required()).passes(value) : true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(RequiredIf.name(), 'This field is required.');
  }
}
