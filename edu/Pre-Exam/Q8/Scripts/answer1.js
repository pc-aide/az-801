// Function to attach event listeners to the solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      installPES: 'dc2',
      generateKey: 'admtcomputer'
    };

    // Get selected answers
    const selectedInstallPES = document.getElementById('installPES').value;
    const selectedGenerateKey = document.getElementById('generateKey').value;

    // Show correct/incorrect styling
    if (selectedInstallPES === correctAnswers.installPES) {
      document.getElementById('installPES').parentElement.classList.add('highlight');
    } else {
      document.getElementById('installPES').parentElement.classList.add('incorrect');
    }

    if (selectedGenerateKey === correctAnswers.generateKey) {
      document.getElementById('generateKey').parentElement.classList.add('highlight');
    } else {
      document.getElementById('generateKey').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    if (solutionInfoElement) {
      if (selectedInstallPES === correctAnswers.installPES && selectedGenerateKey === correctAnswers.generateKey) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if both answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question1');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question1');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question1');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question1(button);
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
