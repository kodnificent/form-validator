import FormValidator from '../FormValidator';

/* eslint-disable class-methods-use-this */
export default class Required {
  static name() {
    return 'required';
  }

  passes(value) {
    return value;
  }

  message() {
    return FormValidator.$translation(Required.name());
  }
}
