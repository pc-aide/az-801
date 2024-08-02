// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question9(button) {
    button.addEventListener('click', function() {
        // Reset styles for dropdowns
        document.querySelectorAll('select').forEach(select => {
            select.style.backgroundColor = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswers = {
            'clusterRole': 'Hyper-V Replica Broker',
            'replicationTarget': 'The name of the Hyper-V Replica Broker'
        };

        // Check and highlight answers
        Object.keys(correctAnswers).forEach(key => {
            const selectedOption = document.getElementById(key);
            if (selectedOption) {
                if (selectedOption.value === correctAnswers[key]) {
                    correctCount++;
                } else {
                    selectedOption.style.backgroundColor = 'red';
                }
            }
        });

        // Update global score
        if (correctCount === Object.keys(correctAnswers).length) {
            score++; // Increment score if all answers are correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question9');
        if (solutionInfoElement) {
            if (correctCount === Object.keys(correctAnswers).length) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question9');
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
        attachSolutionButtonListeners_question9(button);
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
