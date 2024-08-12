// Function to attach event listeners to the solution button for question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      onDomainControllers: 'installMonitorAgent',
      onAzure: 'createLogAnalyticsWorkspace'
    };

    // Get selected answers
    const selectedOnDomainControllers = document.getElementById('onDomainControllers').value;
    const selectedOnAzure = document.getElementById('onAzure').value;

    // Show correct/incorrect styling
    if (selectedOnDomainControllers === correctAnswers.onDomainControllers) {
      document.getElementById('onDomainControllers').parentElement.classList.add('highlight');
    } else {
      document.getElementById('onDomainControllers').parentElement.classList.add('incorrect');
    }

    if (selectedOnAzure === correctAnswers.onAzure) {
      document.getElementById('onAzure').parentElement.classList.add('highlight');
    } else {
      document.getElementById('onAzure').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question2');
    if (solutionInfoElement) {
      if (selectedOnDomainControllers === correctAnswers.onDomainControllers && selectedOnAzure === correctAnswers.onAzure) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if both answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question2');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question2');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question2');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question2(button);
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
