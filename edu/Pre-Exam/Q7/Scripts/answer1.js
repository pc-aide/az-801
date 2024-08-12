// Function to attach event listeners to solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      azureVM: 'Virtual machine extensions',
      onPremisesServer: 'The Windows installer (MSI) package'
    };

    // Check selected answers
    const selectedAzureVM = document.querySelector('select[name="question1_azure_vm"]').value;
    const selectedOnPremisesServer = document.querySelector('select[name="question1_on_premises"]').value;

    // Show correct/incorrect styling
    if (selectedAzureVM === correctAnswers.azureVM) {
      document.querySelector('select[name="question1_azure_vm"]').parentElement.classList.add('highlight');
    } else {
      document.querySelector('select[name="question1_azure_vm"]').parentElement.classList.add('incorrect');
    }

    if (selectedOnPremisesServer === correctAnswers.onPremisesServer) {
      document.querySelector('select[name="question1_on_premises"]').parentElement.classList.add('highlight');
    } else {
      document.querySelector('select[name="question1_on_premises"]').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    if (solutionInfoElement) {
      if (selectedAzureVM === correctAnswers.azureVM && selectedOnPremisesServer === correctAnswers.onPremisesServer) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
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
