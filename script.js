document.getElementById('btn').onclick = function () {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const message = document.getElementById('validation');

  if (password === confirmPassword) {
    message.textContent = '*Passwords Match';
    message.style.color = '#3ae374';
  } else {
    message.textContent = '*Passwords do not match';
    message.style.color = '#ff4d4d';
    return false;
  }
  return true;
};
