export default {
  /**
   * Target form element selector.
   */
  selector: 'form',

  /**
   * Form validator options.
   */
  options() {
    return {
      messages: null,
      placeholders: null,
      rules: null,
      fieldSelector: '[name=:attribute]',
      feedbackSelector: '[data-:attribute-feedback]',
      beforeValidate: this.beforeValidate,
      onInvalid: this.onInvalid,
      validated: this.validated,
    };
  },

  /**
   * Callback to call before validating a form.
   *
   * @param {Object} event
   */
  beforeValidate: (event) => {
    //
  },

  /**
   * Callback to call when there is a validation error on a form.
   *
   * @param {Event} event
   * @param {array} errors
   */
  onInvalid: (event, errors) => {
    event.preventDefault();

    errors.forEach((error) => {
      //
    });
  },

  /**
   * Callback to call after the form passes validation.
   */
  validated: () => {
    //
  },
};
