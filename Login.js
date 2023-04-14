const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  if (usernameValue === '' || passwordValue === '') {
    alert('Please enter both username and password.');
  } else {
    // Perform login here
    alert(`Welcome, ${usernameValue}!`);
  }
});
