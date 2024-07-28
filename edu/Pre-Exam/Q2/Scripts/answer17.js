function attachSolutionButtonListeners_question17(button) {
    button.addEventListener('click', function() {
        // Reset styles for answers
        document.querySelectorAll('.answers label').forEach(label => {
            label.classList.remove('incorrect', 'highlight');
        });

        // Check the selected answer
        const correctAnswer = "A";
        const selectedOption = document.querySelector('input[name="question17"]:checked');
        const isCorrect = selectedOption && selectedOption.value === correctAnswer;

        // Apply styles based on correctness
        if (isCorrect) {
            selectedOption.parentElement.classList.add('highlight');
            score++; // Increment the score if the answer is correct
        } else {
            selectedOption && selectedOption.parentElement.classList.add('incorrect');
        }

        // Display the solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question17');
        if (solutionInfoElement) {
            if (isCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
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
