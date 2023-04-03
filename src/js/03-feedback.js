import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitClick);
form.addEventListener('input', throttle(onInputData, 500));


checkStorageContent();

const formData = {};

function onInputData(evt) {
    formData[evt.target.name] = evt.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    };


function onSubmitClick(evt) {
    evt.preventDefault();

    const { email, message } = form.elements;
    console.log({ email: email.value, message: message.value });

     if (email.value === '' || message.value === '') {
       return alert('Please fill in all the fields!');
     }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checkStorageContent() {
    const savedFeedbackForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const email = document.querySelector('.feedback-form input');
// const message = document.querySelector('.feedback-form textarea');
    if (savedFeedbackForm) {
        email.value = savedFeedbackForm.email;
        message.value = savedFeedbackForm.message;
    }
}