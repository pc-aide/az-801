// Function to attach event listeners to solution button for question 10
function attachSolutionButtonListeners_question10(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = {
          server1: 'Server2, Server3, & Server4',
          server3: 'Server1 & Server2 only'
      };

      // Get selected answers from drop-down lists
      const selectedServer1Answer = document.getElementById('server1').value;
      const selectedServer3Answer = document.getElementById('server3').value;

      // Show correct/incorrect styling
      const server1Select = document.getElementById('server1');
      const server3Select = document.getElementById('server3');

      if (selectedServer1Answer === correctAnswers.server1) {
          server1Select.classList.add('highlight');
      } else {
          server1Select.classList.add('incorrect');
      }

      if (selectedServer3Answer === correctAnswers.server3) {
          server3Select.classList.add('highlight');
      } else {
          server3Select.classList.add('incorrect');
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question10');
      if (solutionInfoElement) {
          if (selectedServer1Answer === correctAnswers.server1 &&
              selectedServer3Answer === correctAnswers.server3) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question10');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question10');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question10');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question10(button);
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
