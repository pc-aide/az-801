// Function to attach event listeners to solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = {
          user1: 'No',
          user2: 'Yes',
          user3: 'No'
      };

      // Get selected answers from radio buttons
      const selectedUser1Answer = document.querySelector('input[name="user1"]:checked')?.value;
      const selectedUser2Answer = document.querySelector('input[name="user2"]:checked')?.value;
      const selectedUser3Answer = document.querySelector('input[name="user3"]:checked')?.value;

      // Show correct/incorrect styling
      const user1Radios = document.getElementsByName('user1');
      const user2Radios = document.getElementsByName('user2');
      const user3Radios = document.getElementsByName('user3');

      user1Radios.forEach(radio => {
          if (radio.value === correctAnswers.user1) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers.user1) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      user2Radios.forEach(radio => {
          if (radio.value === correctAnswers.user2) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers.user2) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      user3Radios.forEach(radio => {
          if (radio.value === correctAnswers.user3) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers.user3) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
          if (selectedUser1Answer === correctAnswers.user1 &&
              selectedUser2Answer === correctAnswers.user2 &&
              selectedUser3Answer === correctAnswers.user3) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question9');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question9');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question9');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
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
