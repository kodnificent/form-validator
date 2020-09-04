export default class Required {
  static name() {
    return 'required';
  }

  static passes(value) {
    return value;
  }

  static message() {
    return 'The :attribute is required';
  }
}
