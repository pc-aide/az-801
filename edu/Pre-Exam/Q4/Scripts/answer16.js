// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
      // Reset styles for drop-downs
      document.querySelectorAll('select').forEach(select => {
          select.parentElement.style.color = '';
      });

      // Initialize local score counter for this question
      let correctCount = 0;

      // Define correct answers
      const correctAnswers = {
          'onServer1': 'Change the listening port of the website',
          'inAzure': 'Configure a certificate & a custom domain name'
      };

      // Check and highlight answers
      Object.keys(correctAnswers).forEach(key => {
          const selectedOption = document.querySelector(`select[name="${key}"]`).value;
          if (selectedOption) {
              if (selectedOption === correctAnswers[key]) {
                  correctCount++;
              } else {
                  document.querySelector(`select[name="${key}"]`).parentElement.style.color = 'red';
              }
          }
      });

      // Update global score
      if (correctCount === Object.keys(correctAnswers).length) {
          score++; // Increment score if all answers are correct
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question16');
      if (solutionInfoElement) {
          if (correctCount === Object.keys(correctAnswers).length) {
              solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
              solutionInfoElement.classList.remove('incorrect');
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question16');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Display references section
      const refElement = document.getElementById('references_question16');
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
      attachSolutionButtonListeners_question16(button);
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
