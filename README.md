# Form Validator

FormValidator is a javascript plugin that makes validating html forms less painless for frontend developers.
It ships with many core validation rules and also gives you room to add customized validation rules. It also validates`

## Installation

### Via NPM

`npm i @kodnificent/form-validator`

### Via CDN

```html
<script src="https://unpkg.com/@kodnificent/form-validator^1"></script>

<!-### Minified version (Production use) -->

<script src="https://unpkg.com/@kodnificent/form-validator^1/dist/form-validator.min.js"></script>
```

## Quick Start

There are two ways to validate your HTML form using FormValidator

1. Inline validation.

2. External validation.

### Inline Validation

```html
<form id="my-form">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" data-rules="required,alpha_num"><br>
    <span data-username-feedback></span>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" data-rules="required,email"><br>
    <span data-email-feedback></span>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" id="password" name="password" data-rules="required"><br>
    <span data-password-feedback></span>
  </div>
  <div>
    <label for="password_confirmation">Password:</label>
    <input type="text" id="password_confirmation" name="password_confirmation" data-rules="confirmed"><br>
    <span data-password-confirmation-feedback></span>
  </div>
  <div>
    <button>submit</button>
  </div>
</form>

<script>
  const validator = new FormValidator('#my-form');
</script>
```

### External Validation

```html
<form id="my-form">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br>
    <span data-username-feedback></span>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email"><br>
    <span data-email-feedback></span>
  </div>
  <div>
    <button>submit</button>
  </div>
</form>

<script>
  const validator = new FormValidator('#my-form', {
    rules: {
      username: 'required|alpha_num',
      email: ['required', 'email']
    }
  });
</script>
```

## Available rules

### Accepted

**key:** `accepted`  
The field under validation must be accepted. Accepted values are `yes`, `on`, `1` or `true`. This rule comes in handy when
validating a terms and condition field.

### Alpha

**key:** `alpha`  
The field must contain only alphabets.

### AlphaDash

**key:** `alpha_dash`  
The field must contain only alphanumeric characters as well as dashes and underscores.

### AlphaNum

**key:** `alpha_num`  
The field must contain only alphanumeric characters.

### Array

**key:** `array`  
The field must be an array.

### Boolean

**key:** `boolean`  
The field must be able to cast to a boolean. Accepted values are `1`, `0`, `true`, `false`, `'1'`, `'0'`, `'true'`, `'false'`.

### Confirmed

**key:** `confirmed`  
The field under validation must have a matching field of `fieldname_confirmation` and must be equal.
Example is a `password` field having a `password_confirmation` field.

### Contains

**key:** `contains:param1,param2`  
The field under validation must contain any of the following parameters.

### Date

**key:** `date`  
The field under validation must be a validate date.

### Different

**key:** `different:field`  
The field under validation must have a different value from another field.

### Digits

**key:** `digits:length`  
The field under validation must be a digit with a specific length.

### DigitsBetween

**key:** `digits_between:min,max`  
The field under validation must be a digit and have a length between the specified min and max.

### Email

**key:** `email`  
The field under validation must be a valid email address.

### EndsWith

**key:** `ends_with:value1,value2,...`  
The field under validation must end with any of the given list of values. E.g `ends_with:.com,.io,.com.ng`.

### File

**key:** `file`  
The field under validation must be a valid file.

### GreaterThan

**key:** `gt:someOtherField`  
The value of the field under validation must be greater than another field.

### GreaterThanOrEqual

**key:** `gte:someOtherField`  
The value of the field under validation must be greater than or equal to another field.

### In

**key:** `in:value1,value2,...`  
The field under validation must be included in any of the given list of values.

### LessThan

**key:** `lt:someOtherField`  
The value of the field under validation must be less than another field.

### LessThanOrEqual

**key:** `lte:someOtherField`  
The value of the field under validation must be less than or equal to another field.

### Required

**key:** `required`  
The field under validation must be present and not null or undefined or an empty string.

### RequireIf

**key:** `required_if:otherField,value`  

The field under validation is required if another field has a specific value.

### StartsWith

**key:** `starts_with:value1,value2,...`  
The field under validation must start with any of the given list of values. E.g `starts_with:https://facebook.com,https://fb.com`.
