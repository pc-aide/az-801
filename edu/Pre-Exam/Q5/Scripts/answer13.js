// Function to attach event listeners to solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswerPhysicalServers = 'Migration & modernization';
    const correctAnswerHyperVVMs = 'Migration & modernization';

    // Get selected answers
    const selectedAnswerPhysicalServers = document.getElementById('physicalServers').value;
    const selectedAnswerHyperVVMs = document.getElementById('hyperVVMs').value;

    // Check selected answers and show correct/incorrect styling
    if (selectedAnswerPhysicalServers === correctAnswerPhysicalServers &&
        selectedAnswerHyperVVMs === correctAnswerHyperVVMs) {
      button.classList.add('highlight');
      window.score++; // Increment the score if all answers are correct
    } else {
      button.classList.add('incorrect');
      const correctAnswersElement = document.getElementById('correctAnswers_question13');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question13(button);
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
