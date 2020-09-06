import FormValidator from './FormValidator';
import rules from './rules';

FormValidator.$withRule(...rules);

export default FormValidator;
