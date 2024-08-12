// Fonction pour attacher les écouteurs d'événements au bouton de solution pour la question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
      // Réponses correctes
      const correctAnswers = ['Diagnostic settings', 'Serial console'];

      // Récupérer les réponses sélectionnées
      const selectedOptions = Array.from(document.querySelectorAll('input[name="question2_option"]:checked')).map(el => el.value);

      // Initialiser le score
      let correctCount = 0;

      // Vérifier les réponses sélectionnées
      selectedOptions.forEach(option => {
          if (correctAnswers.includes(option)) {
              correctCount++;
              document.querySelector(`input[value="${option}"]`).parentElement.classList.add('highlight');
          } else {
              document.querySelector(`input[value="${option}"]`).parentElement.classList.add('incorrect');
          }
      });

      // Vérifier si toutes les bonnes réponses ont été sélectionnées
      if (correctCount === correctAnswers.length && selectedOptions.length === correctAnswers.length) {
          window.score++; // Incrémenter le score si toutes les réponses sont correctes
      } else {
          const correctAnswersElement = document.getElementById('correctAnswers_question2');
          if (correctAnswersElement) {
              correctAnswersElement.style.display = 'block';
          }
      }

      // Afficher les informations de solution
      const solutionInfoElement = document.getElementById('solutionInfo_question2');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore(); // Afficher le score final
  });
}

// Initialiser la fonctionnalité au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question2(button);
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
