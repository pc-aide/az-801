// Function to attach event listeners to solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswerService = 'Server2';
    const correctAnswerExtension = 'Server3';

    // Get selected answers
    const selectedAnswerService = document.getElementById('storageMigrationService').value;
    const selectedAnswerExtension = document.getElementById('storageMigrationExtension').value;

    // Check selected answers and show correct/incorrect styling
    if (selectedAnswerService === correctAnswerService && selectedAnswerExtension === correctAnswerExtension) {
      button.classList.add('highlight');
      window.score++; // Increment the score if both answers are correct
    } else {
      button.classList.add('incorrect');
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

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
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
