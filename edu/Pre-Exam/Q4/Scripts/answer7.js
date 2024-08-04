// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
      // Reset styles for dropdowns
      document.querySelectorAll('select').forEach(select => {
          select.style.color = '';
      });

      // Initialize local score counter for this question
      let correctCount = 0;

      // Define correct answers
      const correctAnswers = {
          location: 'A Recovery Services vault in Azure',
          frequency: '3'
      };

      // Get selected values
      const selectedLocation = document.querySelector('select[name="question7_location"]').value;
      const selectedFrequency = document.querySelector('select[name="question7_frequency"]').value;

      // Check and highlight answers
      if (selectedLocation === correctAnswers.location) {
          correctCount++;
      } else {
          document.querySelector('select[name="question7_location"]').style.color = 'red';
      }

      if (selectedFrequency === correctAnswers.frequency) {
          correctCount++;
      } else {
          document.querySelector('select[name="question7_frequency"]').style.color = 'red';
      }

      // Check if both correct answers are selected
      if (correctCount === Object.keys(correctAnswers).length) {
          score++; // Increment score if all answers are correct
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question7');
      if (solutionInfoElement) {
          if (correctCount === Object.keys(correctAnswers).length) {
              solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation and references
              solutionInfoElement.classList.remove('incorrect');
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question7');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Display references section
      const refElement = document.getElementById('references_question7');
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
      attachSolutionButtonListeners_question7(button);
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
