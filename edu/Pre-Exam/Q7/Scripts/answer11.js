// Function to attach event listeners to solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
      // Define the correct answer
      const correctAnswer = '3';

      // Get the selected answer
      const selectedAnswer = document.querySelector('input[name="ipAddresses"]:checked');

      // Show correct/incorrect styling
      const radioButtons = document.querySelectorAll('input[name="ipAddresses"]');
      radioButtons.forEach(button => {
        if (button.value === correctAnswer) {
          button.parentElement.classList.add('highlight');
        } else if (button.checked) {
          button.parentElement.classList.add('incorrect');
        }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question11');
      if (solutionInfoElement) {
          if (selectedAnswer && selectedAnswer.value === correctAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answer is correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question11');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question11');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question11');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question11(button);
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
