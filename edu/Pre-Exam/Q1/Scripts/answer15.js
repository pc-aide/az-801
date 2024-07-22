function attachSolutionButtonListeners_question15(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('.radio-group input[type="radio"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Check the answer
        const selectedOption = document.querySelector('input[name="answer15"]:checked').value;
        const correctAnswer = 'B';
        let allCorrect = true;

        // Check if the selected answer is correct
        if (selectedOption !== correctAnswer) {
            allCorrect = false;
            document.querySelector(`input[name="answer15"][value="${selectedOption}"]`).parentElement.style.color = 'red';
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question15');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background if needed
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question15');
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
        attachSolutionButtonListeners_question15(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
