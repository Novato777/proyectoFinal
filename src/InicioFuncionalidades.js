// Función para abrir el modal de resultados
function openModal(type) {
  document.getElementById(`modal-${type}`).style.display = "block";
}

// Función para cerrar el modal de resultados
function closeModal(type) {
  document.getElementById(`modal-${type}`).style.display = "none";
}

// Función para verificar las respuestas y mostrar el puntaje y las correcciones
function verificarRespuestas() {
  // Respuestas correctas para cada pregunta
  const correctAnswers = {
    pregunta1: "correcto",
    pregunta2: "correcto",
    pregunta3: "correcto",
    pregunta4: "correcto",
    pregunta5: "correcto"
  };

  // Corrección de respuestas incorrectas
  const corrections = {
    pregunta1: "La respuesta correcta es Energía Solar.",
    pregunta2: "La respuesta correcta es Dióxido de Carbono (CO₂).",
    pregunta3: "La respuesta correcta es Dinamarca.",
    pregunta4: "La respuesta correcta es Silicio.",
    pregunta5: "La respuesta correcta es Alrededor del 25%."
  };

  // Contadores de respuestas correctas e incorrectas
  let correctCount = 0;
  let incorrectCount = 0;
  let feedbackMessage = ""; // Mensaje que se mostrará en el modal

  // Recorre cada pregunta para revisar las respuestas
  for (const pregunta in correctAnswers) {
    const seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
    if (seleccion) {
      // Si la respuesta es correcta, aumenta el contador de correctas
      if (seleccion.value === correctAnswers[pregunta]) {
        correctCount++;
      } else {
        // Si es incorrecta, aumenta el contador de incorrectas y muestra corrección
        incorrectCount++;
        feedbackMessage += `${pregunta.charAt(0).toUpperCase() + pregunta.slice(1)}: ${corrections[pregunta]}<br>`; // Agregar corrección al mensaje
      }
    }
  }

  // Mostrar el resultado en el modal
  const resultadoText = `Has acertado ${correctCount} de 5 preguntas. Has fallado ${incorrectCount} de 5 preguntas.`;
  document.getElementById("resultado").innerHTML = resultadoText;
  document.getElementById("correcciones").innerHTML = feedbackMessage;

  // Abrir el modal con el resultado
  openModal('resultados');
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

