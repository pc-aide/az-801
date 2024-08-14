// Function to attach event listeners to solution buttons for question 6
function attachSolutionButtonListeners_question6(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons of question 6 only
        document.querySelectorAll('input[name="solution6"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answer
        const correctAnswer = 'C';

        // Check and highlight answer for question 6
        const selectedOption = document.querySelector('input[name="solution6"]:checked');
        if (selectedOption) {
            if (selectedOption.value === correctAnswer) {
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
        const solutionInfoElement = document.getElementById('solutionInfo_question6');
        if (solutionInfoElement) {
            if (correctCount > 0) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question6');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Display references section
        const refElement = document.getElementById('references_question6');
        if (refElement) {
            refElement.style.display = 'block';
        }

        // Calculate and show final score
        showFinalScore();
    });
}

// Initialize event listeners for solution button for question 6
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton[data-answer-name="question6"]').forEach(button => {
        attachSolutionButtonListeners_question6(button);
    });
});
