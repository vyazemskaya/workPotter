const BUTTON = document.querySelector('#button');
const FORM = document.querySelector('.payment__form');

const setError = (parent, error, errorIcon, string) => {
  error.textContent = string;
  parent.append(error);
  parent.classList.add('form__item--error');
  errorIcon.classList.add('form__error-icon--show');
}

const validation = (form) => {
  let result = true
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
      setError(parent, error, errorIcon, 'Обязательное поле');
      result = false;
    } else if (input.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError(parent, error, errorIcon, 'Неверный формат электронной почты');
        result = false;
      }
    } else if (input.id === 'phone-number') {
      const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      if (!phoneRegex.test(value)) {
        setError(parent, error, errorIcon, 'Неверный формат номера телефона');
        result = false;
      }
    } else if (input.id === 'name') {
      const numberRegex = /\d/;
      if (numberRegex.test(value)) {
        setError(parent, error, errorIcon, 'Поле не может содержать цифры');
        result = false;
      }
    } else if (input.id === 'location') {
      const numberOnlyRegex = /^\d+$/;
      if (numberOnlyRegex.test(value)) {
        setError(parent, error, errorIcon, 'Адрес не может содержать только цифры');
        result = false;
      }
    } else if (value.length < 2) {
      setError(parent, error, errorIcon, 'Минимальная длина поля - 2 символа');
      result = false;
    }
  }
  console.log(result)
  return result
};

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validation(FORM)) {
    alert(validation(FORM))
    FORM.submit();
  }
});