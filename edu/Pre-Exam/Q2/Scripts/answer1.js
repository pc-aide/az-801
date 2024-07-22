// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question1(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswers = {
            'comm1': 'yes',
            'comm2': 'yes',
            'comm3': 'yes'
        };

        // Check and highlight answers
        Object.keys(correctAnswers).forEach(key => {
            const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === correctAnswers[key]) {
                    correctCount++;
                } else {
                    selectedOption.parentElement.style.color = 'red';
                }
            }
        });

        // Update global score
        if (correctCount === Object.keys(correctAnswers).length) {
            score++; // Increment score if all answers are correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question1');
        if (solutionInfoElement) {
            if (correctCount === Object.keys(correctAnswers).length) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
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

        // Display references section
        const refElement = document.getElementById('references_question1');
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
        attachSolutionButtonListeners_question1(button);
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
