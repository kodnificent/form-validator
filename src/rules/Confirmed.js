/* eslint-disable class-methods-use-this */

import FormValidator from '../FormValidator';
import Required from './Required';

export default class Confirmed {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'confirmed';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   * @param {string} attribute The field's name
   */
  passes(value, values, attribute) {
    const confirmationFieldName = `${attribute}_confirmation`;
    const confirmationFieldValue = values[confirmationFieldName];

    if (!(new Required()).passes(confirmationFieldValue)) {
      return false;
    }

    return value === confirmationFieldValue;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return FormValidator.$translation(Confirmed.name(), 'Requires confirmation');
  }
}
