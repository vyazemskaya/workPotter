const btn = document.querySelector('#btn');
const frm = document.querySelector('.payment__form');

const isError = (parent, error, errorIcon, string) => {
  error.textContent = string;
  parent.append(error);
  parent.classList.add('form__item--error');
  errorIcon.classList.add('form__error-icon--show');
};

const validate = (form) => {
  let result = true;
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const parent = input.parentNode;
    const errorExist = parent.querySelector('.form__error');
    const errorIcon = parent.querySelector('.form__error-icon');
    const value = input.value;

    if (errorExist) {
      errorIcon.classList.remove('form__error-icon--show');
      parent.classList.remove('form__item--error');
      errorExist.remove();
    }

    const error = document.createElement('p');
    error.classList.add('form__error');

    if (value === '') {
      isError(parent, error, errorIcon, 'Обязательное поле');
      result = false;
    } else if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isError(parent, error, errorIcon, 'Неверный формат электронной почты');
        result = false;
      }
    } else if (input.id === 'phone-number') {
      const phoneRegex =
        /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      if (!phoneRegex.test(value)) {
        isError(parent, error, errorIcon, 'Неверный формат номера телефона');
        result = false;
      }
    } else if (input.id === 'name') {
      const numberRegex = /\d/;
      if (numberRegex.test(value)) {
        isError(parent, error, errorIcon, 'Поле не может содержать цифры');
        result = false;
      }
    } else if (input.id === 'location') {
      const numberOnlyRegex = /^\d+$/;
      if (numberOnlyRegex.test(value)) {
        isError(
          parent,
          error,
          errorIcon,
          'Адрес не может содержать только цифры'
        );
        result = false;
      }
    } else if (value.length < 2) {
      isError(parent, error, errorIcon, 'Минимальная длина поля - 2 символа');
      result = false;
    }
  }
  return result;
};

if (frm) {
  frm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validate(frm)) {
      alert(validate(frm));
      frm.submit();
    }
  });
}
