// Fonction pour attacher les écouteurs d'événements aux boutons de solution pour la question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
      // Réinitialiser les styles pour les boutons radio
      document.querySelectorAll('input[name="question12"]').forEach(radio => {
          radio.parentNode.classList.remove('incorrect', 'highlight');
      });

      // Définir la réponse correcte
      const correctAnswer = 'C';

      // Vérifier la réponse
      const selectedAnswer = document.querySelector('input[name="question12"]:checked');
      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
          selectedAnswer.parentNode.classList.add('highlight');
          window.score++; // Incrémenter le score si la réponse est correcte
      } else {
          if (selectedAnswer) {
              selectedAnswer.parentNode.classList.add('incorrect');
          }
      }

      // Afficher les informations de solution
      const solutionInfoElement = document.getElementById('solutionInfo_question12');
      if (solutionInfoElement) {
          const isCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;

          if (isCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswerElement = document.getElementById('correctAnswer_question12');
              if (correctAnswerElement) {
                  correctAnswerElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Afficher les références
      const referencesElement = document.getElementById('references_question12');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Afficher le score final
  });
}

// Initialiser les fonctionnalités au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question12(button);
  });
});

// Fonction pour afficher le score final
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      const percentage = (window.score / window.totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${window.score}/${window.totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
