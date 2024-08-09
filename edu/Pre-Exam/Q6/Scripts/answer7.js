// Function to attach event listeners to solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function () {
      // Define correct answers
      const correctNetworkConfig = 'Configure virtual network peering between Vnet1 & Vnet2';
      const correctDnsConfig = 'Add a custom DNS server to Vnet2';

      // Get selected answers
      const selectedNetworkConfig = document.getElementById('networkConfiguration').value;
      const selectedDnsConfig = document.getElementById('dnsConfiguration').value;

      // Variable to track if both answers are correct
      let isCorrect = true;

      // Show correct/incorrect styling
      if (selectedNetworkConfig === correctNetworkConfig) {
          document.getElementById('networkConfiguration').classList.add('highlight');
      } else {
          document.getElementById('networkConfiguration').classList.add('incorrect');
          isCorrect = false;
      }

      if (selectedDnsConfig === correctDnsConfig) {
          document.getElementById('dnsConfiguration').classList.add('highlight');
      } else {
          document.getElementById('dnsConfiguration').classList.add('incorrect');
          isCorrect = false;
      }

      // If both answers are correct, increment score by 1
      if (isCorrect) {
          window.score++; // Increment the score by 1 if both answers are correct
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question7');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      // Show reference
      const referenceElement = document.getElementById('ref_question7');
      if (referenceElement) {
          referenceElement.style.display = 'block';
      }

      // Show correct answers
      const correctAnswersElement = document.getElementById('correctAnswers_question7');
      if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question7(button);
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
