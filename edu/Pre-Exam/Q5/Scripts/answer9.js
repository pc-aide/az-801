// Function to attach event listeners to solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'A';

    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="answer_question9"]:checked');

    // Check if an answer is selected
    if (selectedAnswer) {
      // Check selected answer and show correct/incorrect styling
      if (selectedAnswer.value === correctAnswer) {
        button.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        button.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question9');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
    } else {
      alert('Please select an answer before viewing the solution.');
    }
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
