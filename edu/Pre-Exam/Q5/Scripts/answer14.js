// Function to attach event listeners to solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'IKEDiagnosticLog';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="diagnosticLog"]:checked').value;

    // Check selected answer and show correct/incorrect styling
    if (selectedAnswer === correctAnswer) {
      button.classList.add('highlight');
      window.score++; // Increment the score if the answer is correct
    } else {
      button.classList.add('incorrect');
      const correctAnswersElement = document.getElementById('correctAnswers_question14');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question14(button);
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
