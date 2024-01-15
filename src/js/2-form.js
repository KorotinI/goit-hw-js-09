const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const KEY = 'feedback-form-state';
const obj = {
  email: '',
  message: '',
};
form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

checkLocalStorageForKeys('feedback-form-state');

function checkLocalStorageForKeys(key) {
  const savedObj = JSON.parse(localStorage.getItem(key));
  if (savedObj) {
    input.value = savedObj.email || '';
    textarea.value = savedObj.message || '';
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log(obj);
  form.reset();
  localStorage.removeItem(KEY);
}

function onInput(event) {
  event.preventDefault();
  obj.email = input.value;
  obj.message = textarea.value;
  localStorage.setItem(KEY, JSON.stringify(obj));
}