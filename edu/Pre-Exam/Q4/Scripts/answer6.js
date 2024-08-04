// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
      // Reset styles for checkboxes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.parentElement.style.color = '';
      });

      // Initialize local score counter for this question
      let correctCount = 0;

      // Define correct answers
      const correctAnswers = ['A. Network Load Balancing (NLB)', 'E. Software Load Balancer (SLB)'];

      // Check and highlight answers
      document.querySelectorAll('input[name="question6"]:checked').forEach(checkbox => {
          if (correctAnswers.includes(checkbox.value)) {
              correctCount++;
          } else {
              checkbox.parentElement.style.color = 'red';
          }
      });

      // Check if both correct answers are selected
      if (correctCount === correctAnswers.length && document.querySelectorAll('input[name="question6"]:checked').length === correctAnswers.length) {
          score++; // Increment score if all answers are correct
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question6');
      if (solutionInfoElement) {
          if (correctCount === correctAnswers.length && document.querySelectorAll('input[name="question6"]:checked').length === correctAnswers.length) {
              solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
              solutionInfoElement.classList.remove('incorrect');
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question6');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Display references section
      const refElement = document.getElementById('references_question6');
      if (refElement) {
          refElement.style.display = 'block';
      }

      // Calculate and show final score
      showFinalScore();
  });
}

// Initialize event listeners for all solution buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question6(button);
  });
});

// Function to display final score
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      // Using constants from constants.js
      const percentage = (score / totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
