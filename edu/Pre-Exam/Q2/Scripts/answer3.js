// Function to attach event listeners to solution buttons for question 3
function attachSolutionButtonListeners_question3(button) {
    button.addEventListener('click', function() {
        // Reset styles for checkbox options
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.parentElement.style.color = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswers = {
            'Enforce drive encryption type on operating system drives': true,
            'Choose how BitLocker protected operating system drives can be recovered': true
        };

        // Check and highlight answers
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            const label = checkbox.nextElementSibling.textContent.trim();
            if (checkbox.checked) {
                if (correctAnswers[label]) {
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
        const solutionInfoElement = document.getElementById('solutionInfo_question3');
        if (solutionInfoElement) {
            if (correctCount === Object.keys(correctAnswers).length) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question3');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Display references section
        const refElement = document.getElementById('references_question3');
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
        attachSolutionButtonListeners_question3(button);
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
