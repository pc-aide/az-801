// Function to attach event listeners to solution buttons for question 18
function attachSolutionButtonListeners_question18(button) {
    button.addEventListener('click', function() {
        // Reset styles for checkbox options in question 18
        document.querySelectorAll('input[name="q18"]').forEach(checkbox => {
            checkbox.parentElement.style.color = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswers = {
            'A': true,
            'D': true
        };

        // Check and highlight answers
        document.querySelectorAll('input[name="q18"]').forEach(checkbox => {
            const answerValue = checkbox.value;
            if (checkbox.checked) {
                if (correctAnswers[answerValue]) {
                    correctCount++;
                } else {
                    checkbox.parentElement.style.color = 'red'; // Highlight incorrect answers
                }
            }
        });

        // Update global score
        if (correctCount === Object.keys(correctAnswers).length) {
            score++; // Increment score if all answers are correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question18');
        if (solutionInfoElement) {
            if (correctCount === Object.keys(correctAnswers).length) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question18');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Display explanation and references
        const explanationElement = document.getElementById('explanation_question18');
        if (explanationElement) {
            explanationElement.style.display = 'block';
        }
        const referencesElement = document.getElementById('references_question18');
        if (referencesElement) {
            referencesElement.style.display = 'block';
        }

        // Calculate and show final score
        showFinalScore();
    });
}

// Initialize event listeners for all solution buttons related to question 18
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton[data-question="18"]').forEach(button => {
        attachSolutionButtonListeners_question18(button);
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
