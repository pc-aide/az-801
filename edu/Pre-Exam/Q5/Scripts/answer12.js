// Function to attach event listeners to solution button for question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswerDiskSpace = '48 TB';
    const correctAnswerSsdCache = 'Only write operations are cached';
    const correctAnswerHddCache = 'Read & write operations are cached';

    // Get selected answers
    const selectedAnswerDiskSpace = document.getElementById('diskSpace').value;
    const selectedAnswerSsdCache = document.getElementById('ssdCache').value;
    const selectedAnswerHddCache = document.getElementById('hddCache').value;

    // Check selected answers and show correct/incorrect styling
    if (selectedAnswerDiskSpace === correctAnswerDiskSpace &&
        selectedAnswerSsdCache === correctAnswerSsdCache &&
        selectedAnswerHddCache === correctAnswerHddCache) {
      button.classList.add('highlight');
      window.score++; // Increment the score if all answers are correct
    } else {
      button.classList.add('incorrect');
      const correctAnswersElement = document.getElementById('correctAnswers_question12');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question12(button);
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
