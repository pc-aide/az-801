// Function to attach event listeners to solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = ['B', 'D'];

      // Get selected answers
      const selectedAnswers = Array.from(document.querySelectorAll('input[name="question9"]:checked')).map(checkbox => checkbox.value);

      // Show correct/incorrect styling
      document.querySelectorAll('input[name="question9"]').forEach(checkbox => {
          if (correctAnswers.includes(checkbox.value)) {
              checkbox.parentElement.classList.add('highlight');
          } else if (checkbox.checked) {
              checkbox.parentElement.classList.add('incorrect');
          }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
          if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer))) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if all correct answers are selected
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question9');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question9');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question9');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question9(button);
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
