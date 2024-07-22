function attachSolutionButtonListeners_question17(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('.radio-group input[type="radio"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Check the answers
        const selectedOption = document.querySelector('input[name="answer17"]:checked');
        const correctAnswer = 'D';
        const allCorrect = selectedOption && selectedOption.value === correctAnswer;

        // Highlight the selected answer
        if (selectedOption) {
            if (selectedOption.value !== correctAnswer) {
                selectedOption.parentElement.style.color = 'red';
            }
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question17');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
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

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question17(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
