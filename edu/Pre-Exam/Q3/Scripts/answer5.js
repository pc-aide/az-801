// Function to attach event listeners to solution buttons for question 5
function attachSolutionButtonListeners_question5(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons specific to question 5
        document.querySelectorAll('#question5-group input[type="radio"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answer specific to question 5
        const correctAnswer_question5 = 'D';

        // Check and highlight answer
        const selectedOption = document.querySelector('input[name="solution_question5"]:checked');
        if (selectedOption) {
            const userAnswerText = document.getElementById('userAnswerText_question5');
            if (userAnswerText) {
                userAnswerText.textContent = selectedOption.nextElementSibling.textContent;
            }
            
            const yourAnswerElement = document.getElementById('yourAnswer_question5');
            if (yourAnswerElement) {
                yourAnswerElement.style.display = 'block';
            }

            if (selectedOption.value === correctAnswer_question5) {
                correctCount++;
            } else {
                selectedOption.parentElement.style.color = 'red'; // Highlight incorrect answers
            }
        }

        // Update global score
        if (correctCount > 0) {
            score++; // Increment score if the answer is correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question5');
        if (solutionInfoElement) {
            if (correctCount > 0) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question5');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Display references section
        const refElement = document.getElementById('references_question5');
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
        attachSolutionButtonListeners_question5(button);
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
