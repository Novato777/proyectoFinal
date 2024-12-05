// Seleccionar elementos del DOM
const form = document.getElementById('calculator-form');
const input = document.getElementById('kwh-input');
const resultDiv = document.getElementById('result');

// Agregar evento al formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recargar la página

  // Obtener el valor ingresado por el usuario
  const kwh = parseFloat(input.value);

  // Validar que el valor ingresado sea válido
  if (isNaN(kwh) || kwh <= 0) {
    resultDiv.textContent = 'Por favor, ingresa un número válido.';
    return;
  }

  // Realizar el cálculo
  const twhAnual = (kwh / 1000) * 12;
  const consumoFinal = (twhAnual * 1000) * 0.31732163;

  // Mostrar el resultado 
  resultDiv.textContent = `Tu consumo es: ${consumoFinal.toFixed(2)}%. 
    es decir un  ${twhAnual.toFixed(2)}% del consumo anual nacional.`;
});
