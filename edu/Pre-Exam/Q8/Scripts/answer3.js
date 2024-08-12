// Function to attach event listeners to the solution button for question 3
function attachSolutionButtonListeners_question3(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'Domain Admins';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="userGroup"]:checked');

    if (selectedAnswer) {
      // Show correct/incorrect styling
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question3');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question3');
    if (solutionInfoElement) {
      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
      } else {
        solutionInfoElement.classList.add('incorrect');
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question3(button);
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
