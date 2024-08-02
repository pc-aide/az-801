// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question10(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.parentElement.style.backgroundColor = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswer = 'Unplanned Failover';

        // Check and highlight answers
        const selectedOption = document.querySelector('input[name="action"]:checked');
        if (selectedOption) {
            if (selectedOption.value === correctAnswer) {
                correctCount++;
            } else {
                selectedOption.parentElement.style.backgroundColor = 'red';
            }
        }

        // Update global score
        if (correctCount === 1) {
            score++; // Increment score if the answer is correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question10');
        if (solutionInfoElement) {
            if (correctCount === 1) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question10');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Calculate and show final score
        showFinalScore();
    });
}

// Initialize event listeners for all solution buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question10(button);
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
