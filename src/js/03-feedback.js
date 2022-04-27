import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
};

const savedFormData = localStorage.getItem('feedback-form-state');
const parsedFormData = JSON.parse(savedFormData);
const formData = {
    email: '',
    message: '',
};

if (localStorage.getItem('feedback-form-state')) {
    refs.email.value = parsedFormData.email;
    refs.message.value = parsedFormData.message;
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput() {
    formData.email = refs.form.email.value;
    formData.message = refs.form.message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    if (refs.email.value === '') {
        console.log('Please. Enter your email');
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

        clearFormData();
    }
}

function clearFormData() {
    refs.email.value = '';
    refs.message.value = '';

    localStorage.removeItem('feedback-form-state');
}
