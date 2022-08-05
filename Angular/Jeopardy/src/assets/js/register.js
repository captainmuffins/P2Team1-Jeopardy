/*
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("--- Validation ---")

  const forms = document.querySelectorAll('.needs-validation');
  const password1 = document.getElementById('playerPassword');
  const password2 = document.getElementById('confirmPassword');
  Array.from(forms).forEach(form => {
    form.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        forms[0].classList.remove('invalid-password');
        forms[0].classList.remove('valid-password');
        if (form.checkValidity()) {
          if (password1.value != password2.value) {
            forms[0].classList.add('invalid-password');
          } else {
            document.getElementById('submitBtn').click();
          }
        }
        form.classList.add('was-validated')
      }
    }, false);
    form.addEventListener('keyup', event => {
      event.preventDefault();
      event.stopPropagation();
      if (event.target.type == 'password') {
        forms[0].classList.remove('invalid-password');
        forms[0].classList.remove('valid-password');
        if (password1.value.length > 0 && password2.value.length > 0) {
          if (password1.value != password2.value) {
            forms[0].classList.add('invalid-password');
          } else {
            forms[0].classList.add('valid-password');
          }
        } else {
          forms[0].classList.add('invalid-password');
        }
      }
    });
  })

});
*/
