document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})

const miBoton = document.getElementById('miBoton');

function handleClick() {
     alert('Hola!, has hecho clic en el botón.');
    }

miBoton.addEventListener("click", handleClick)

function showAlert() {
     alert('ALERTA');
 }

const form = document.getElementById('myForm');

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
