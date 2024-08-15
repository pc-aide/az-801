// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question2(button) {
    button.addEventListener('click', function() {
        const formId = 'form_2a'; // Unique form ID
        const solutionInfoId = 'solutionInfo_2a'; // Unique solution info ID
        const correctAnswersId = 'correctAnswers_2a'; // Unique correct answers ID
        const referencesId = 'references_2a'; // Unique references ID
        
        // Reset styles for radio buttons
        document.querySelectorAll(`#${formId} input[type="radio"]`).forEach(radio => {
            radio.parentElement.style.color = '';
        });
  
        // Initialize local score counter for this question
        let correctCount = 0;
  
        // Define correct answer
        const correctAnswer = 'D';
  
        // Check and highlight answers
        const selectedOption = document.querySelector(`#${formId} input[name="solution_2a"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === correctAnswer) {
                correctCount++;
            } else {
                selectedOption.parentElement.style.color = 'red';
            }
        }
  
        // Update global score
        if (correctCount === 1) {
            score++; // Increment score if the answer is correct
        }
  
        // Display solution info
        const solutionInfoElement = document.getElementById(solutionInfoId);
        if (solutionInfoElement) {
            if (correctCount === 1) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById(correctAnswersId);
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }
  
        // Display references section
        const refElement = document.getElementById(referencesId);
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
        attachSolutionButtonListeners_question2(button);
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
  
