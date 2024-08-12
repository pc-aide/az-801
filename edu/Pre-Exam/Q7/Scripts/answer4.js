// Function to attach event listeners to solution button for question 4
function attachSolutionButtonListeners_question4(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = {
          enforce: 'Microsoft Defender Application Control',
          manage: 'GPOs'
      };

      // Check selected answers
      const selectedEnforce = document.querySelector('select[name="question4_enforce"]').value;
      const selectedManage = document.querySelector('select[name="question4_manage"]').value;

      // Show correct/incorrect styling
      if (selectedEnforce === correctAnswers.enforce) {
          document.querySelector('select[name="question4_enforce"]').parentElement.classList.add('highlight');
      } else {
          document.querySelector('select[name="question4_enforce"]').parentElement.classList.add('incorrect');
      }
      if (selectedManage === correctAnswers.manage) {
          document.querySelector('select[name="question4_manage"]').parentElement.classList.add('highlight');
      } else {
          document.querySelector('select[name="question4_manage"]').parentElement.classList.add('incorrect');
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question4');
      if (solutionInfoElement) {
          if (selectedEnforce === correctAnswers.enforce && selectedManage === correctAnswers.manage) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question4');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question4');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question4');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question4(button);
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
