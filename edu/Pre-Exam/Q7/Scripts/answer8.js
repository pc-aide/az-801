// Function to attach event listeners to solution button for question 8
function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const user1CorrectAnswer = '9';
      const admin1CorrectAnswer = '8';

      // Get selected answers from drop-down lists
      const selectedUser1Answer = document.getElementById('user1_password_length').value;
      const selectedAdmin1Answer = document.getElementById('admin1_password_length').value;

      // Show correct/incorrect styling
      const user1Select = document.getElementById('user1_password_length');
      const admin1Select = document.getElementById('admin1_password_length');

      if (selectedUser1Answer === user1CorrectAnswer) {
          user1Select.classList.add('highlight');
      } else {
          user1Select.classList.add('incorrect');
      }

      if (selectedAdmin1Answer === admin1CorrectAnswer) {
          admin1Select.classList.add('highlight');
      } else {
          admin1Select.classList.add('incorrect');
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question8');
      if (solutionInfoElement) {
          if (selectedUser1Answer === user1CorrectAnswer &&
              selectedAdmin1Answer === admin1CorrectAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question8');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question8');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question8');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question8(button);
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
