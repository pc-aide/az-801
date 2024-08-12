// Function to attach event listeners to solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const bitlockerCorrectAnswer = 'D';
      const autoUnlockCorrectAnswer = 'C';

      // Get selected answers from drop-down lists
      const selectedBitlockerAnswer = document.getElementById('bitlocker').value;
      const selectedAutoUnlockAnswer = document.getElementById('auto_unlock').value;

      // Show correct/incorrect styling
      const bitlockerSelect = document.getElementById('bitlocker');
      const autoUnlockSelect = document.getElementById('auto_unlock');

      if (selectedBitlockerAnswer === bitlockerCorrectAnswer) {
          bitlockerSelect.classList.add('highlight');
      } else {
          bitlockerSelect.classList.add('incorrect');
      }

      if (selectedAutoUnlockAnswer === autoUnlockCorrectAnswer) {
          autoUnlockSelect.classList.add('highlight');
      } else {
          autoUnlockSelect.classList.add('incorrect');
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question7');
      if (solutionInfoElement) {
          if (selectedBitlockerAnswer === bitlockerCorrectAnswer &&
              selectedAutoUnlockAnswer === autoUnlockCorrectAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question7');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question7');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question7');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question7(button);
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
