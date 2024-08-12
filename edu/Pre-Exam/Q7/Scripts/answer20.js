// Function to attach event listeners to the solution button for question 20
function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      onCluster1: 'importAzureMigrateAppliance',
      inAzure: 'createAzureMigrateProject'
    };

    // Get selected answers
    const selectedOnCluster1 = document.getElementById('onCluster1').value;
    const selectedInAzure = document.getElementById('inAzure').value;

    // Show correct/incorrect styling
    if (selectedOnCluster1 === correctAnswers.onCluster1) {
      document.getElementById('onCluster1').parentElement.classList.add('highlight');
    } else {
      document.getElementById('onCluster1').parentElement.classList.add('incorrect');
    }

    if (selectedInAzure === correctAnswers.inAzure) {
      document.getElementById('inAzure').parentElement.classList.add('highlight');
    } else {
      document.getElementById('inAzure').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question20');
    if (solutionInfoElement) {
      if (selectedOnCluster1 === correctAnswers.onCluster1 && selectedInAzure === correctAnswers.inAzure) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if both answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question20');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question20');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question20');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question20(button);
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
