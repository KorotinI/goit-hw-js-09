const feedbackForm = document.querySelector('form.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
const localStorageKey = "feedback-form-state";

const localFormValues = JSON.parse(localStorage.getItem(localStorageKey) );
emailInput.value = localFormValues ? localFormValues.email : "";
messageInput.value = localFormValues ? localFormValues.message : "";

feedbackForm.addEventListener("input", event => {
    const elements = event.currentTarget.elements;
    const emailValue = elements.email.value;
    const messageValue = elements.message.value;
    const formValues = {
        email: emailValue.trim(),
        message: messageValue.trim(),
    }
  localStorage.setItem(localStorageKey, JSON.stringify(formValues));
    });

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    const elements = event.target.elements;
    const emailValue = elements.email.value;
    const messageValue = elements.message.value;
    if (emailValue === "" || messageValue === "") {
        alert("All form fields must be filled in");
        return;
    }
    const formValues = {
        email: emailValue.trim(),
        message: messageValue.trim(),
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formValues));
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
})