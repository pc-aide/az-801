// Function to attach event listeners to solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = ['A', 'D'];

      // Check selected answers
      const selectedAnswers = [];
      document.querySelectorAll('input[name="question18"]:checked').forEach(checkbox => {
          selectedAnswers.push(checkbox.value);
      });

      // Show correct/incorrect styling
      document.querySelectorAll('input[name="question18"]').forEach(checkbox => {
          if (correctAnswers.includes(checkbox.value)) {
              checkbox.parentElement.classList.add('highlight');
          } else if (checkbox.checked) {
              checkbox.parentElement.classList.add('incorrect');
          }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question18');
      if (solutionInfoElement) {
          const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
                             selectedAnswers.length === correctAnswers.length;

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if all answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question18');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question18');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question18');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question18(button);
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
