// Function to attach event listeners to solution button for question 5
function attachSolutionButtonListeners_question5(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = {
          install: 'The Azure Monitor agent',
          provide: 'The Azure Log Analytics workspace ID & the workspace key'
      };

      // Check selected answers
      const selectedInstall = document.querySelector('select[name="question5_install"]').value;
      const selectedProvide = document.querySelector('select[name="question5_provide"]').value;

      // Show correct/incorrect styling
      if (selectedInstall === correctAnswers.install) {
          document.querySelector('select[name="question5_install"]').parentElement.classList.add('highlight');
      } else {
          document.querySelector('select[name="question5_install"]').parentElement.classList.add('incorrect');
      }
      if (selectedProvide === correctAnswers.provide) {
          document.querySelector('select[name="question5_provide"]').parentElement.classList.add('highlight');
      } else {
          document.querySelector('select[name="question5_provide"]').parentElement.classList.add('incorrect');
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question5');
      if (solutionInfoElement) {
          if (selectedInstall === correctAnswers.install && selectedProvide === correctAnswers.provide) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question5');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question5');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question5');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question5(button);
  });
});

// Function to display final score
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      const percentage = (window.score / window.totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${window.score}/${window.totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
