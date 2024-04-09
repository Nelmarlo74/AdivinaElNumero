document.addEventListener('DOMContentLoaded', function() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const form = document.getElementById('myForm');
    const entrada = document.getElementById('myInput');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const numIngresado = parseInt(entrada.value);
      
      if (isNaN(numIngresado) || numIngresado < 1 || numIngresado > 10) {
        message.textContent = 'Por favor, ingrese un número válido entre 1 y 10.';
      } else if (numIngresado === numeroSecreto) {
        message.textContent = `¡Felicidades! ¡Adivinaste, el número es ${numeroSecreto}!`;
        message.style.color = 'green';
      } else if (numIngresado < numeroSecreto) {
        message.textContent = 'Número demasiado bajo. Intenta nuevamente.';
      } else {
        message.textContent = 'Número demasiado alto. Intenta nuevamente.';
      }
  
      entrada.value = '';
    });
  });
  