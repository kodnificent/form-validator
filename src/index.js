import FormValidator from './FormValidator';
import rules, { translations } from './rules';

FormValidator.$withRule(...rules);
FormValidator.$withTranslations(translations);

export default FormValidator;
