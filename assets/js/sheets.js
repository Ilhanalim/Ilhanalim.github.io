const scriptURL =
  'https://script.google.com/macros/s/AKfycbzroiMGYAJgL6dSv4FzISe1zeF29vywPJ7BKs2QjtmriEuAFN6MwX8aga1NyQcZXv-i/exec';

const form = document.forms['submit-to-google-sheet'];
const btnSumbmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const submitSuccsess = document.querySelector('.submit-succsess');
const formInput = document.querySelectorAll('.contact__input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formInput.forEach((input) => {
    if (input.value !== '') {
      btnSumbmit.classList.toggle('d-none');
      btnLoading.classList.toggle('d-none');
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          btnSumbmit.classList.toggle('d-none');
          btnLoading.classList.toggle('d-none');
          submitSuccsess.classList.add('active-modal');
          console.log('Success!', response);
          form.reset();
        })
        .catch((error) => console.error('Error!', error.message));
    }
  });
});
