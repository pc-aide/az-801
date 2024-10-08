// Function to attach event listeners to solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function () {
      // Define correct answer
      const correctAnswer = 'A';

      // Get selected answer
      const selectedAnswer = document.querySelector('input[name="question6"]:checked');

      // Show correct/incorrect styling
      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
          selectedAnswer.parentElement.classList.add('highlight');
          window.score++; // Increment the score if the answer is correct
      } else {
          if (selectedAnswer) {
              selectedAnswer.parentElement.classList.add('incorrect');
          }
          const correctAnswersElement = document.getElementById('correctAnswers_question6');
          if (correctAnswersElement) {
              correctAnswersElement.style.display = 'block';
          }
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question6');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      // Show reference
      const referenceElement = document.getElementById('ref_question6');
      if (referenceElement) {
          referenceElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question6(button);
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
