// Fonction pour attacher les écouteurs d'événements aux boutons de solution pour la question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
      // Réinitialiser les styles pour les boutons radio
      document.querySelectorAll('input[name^="question13"]').forEach(radio => {
          radio.parentNode.classList.remove('incorrect', 'highlight');
      });

      // Définir les réponses correctes
      const correctAnswers = {
          question13_A: 'Yes',
          question13_B: 'Yes',
          question13_C: 'Yes'
      };

      // Vérifier les réponses
      let correctCount = 0;
      Object.keys(correctAnswers).forEach(question => {
          const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
          if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
              selectedAnswer.parentNode.classList.add('highlight');
              correctCount++;
          } else {
              if (selectedAnswer) {
                  selectedAnswer.parentNode.classList.add('incorrect');
              }
          }
      });

      // Incrémenter le score si toutes les réponses sont correctes
      if (correctCount === Object.keys(correctAnswers).length) {
          window.score++;
      }

      // Afficher les informations de solution
      const solutionInfoElement = document.getElementById('solutionInfo_question13');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      // Afficher les références
      const referencesElement = document.getElementById('references_question13');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Afficher le score final
  });
}

// Initialiser les fonctionnalités au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question13(button);
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
