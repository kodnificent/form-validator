export default class Required {
  static name() {
    'required';
  }

  static passes(fieldValue) {
    return fieldValue;
  }

  static message() {
    return 'The :attribute is required';
  }
}
