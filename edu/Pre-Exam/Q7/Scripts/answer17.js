// Function to attach event listeners to solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      part1: 'Add a custom domain name',
      part2: 'Modify a DNS record'
    };

    // Get selected answers
    const selectedAnswerPart1 = document.getElementById('question17_part1').value;
    const selectedAnswerPart2 = document.getElementById('question17_part2').value;

    // Show correct/incorrect styling
    const part1Select = document.getElementById('question17_part1');
    const part2Select = document.getElementById('question17_part2');

    if (selectedAnswerPart1 === correctAnswers.part1) {
      part1Select.classList.add('highlight');
    } else if (selectedAnswerPart1) {
      part1Select.classList.add('incorrect');
    }

    if (selectedAnswerPart2 === correctAnswers.part2) {
      part2Select.classList.add('highlight');
    } else if (selectedAnswerPart2) {
      part2Select.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      if (selectedAnswerPart1 === correctAnswers.part1 &&
          selectedAnswerPart2 === correctAnswers.part2) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question17');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question17');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question17');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question17(button);
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
