function attachSolutionButtonListeners_question16(button) {
    button.addEventListener('click', function() {
        // Reset styles for checkboxes
        document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(checkbox => {
            checkbox.parentElement.style.color = '';
        });

        // Check the answers
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer16"]:checked')).map(checkbox => checkbox.value);
        const correctAnswers = ['A', 'B'];
        let allCorrect = true;

        // Check if the selected answers are correct
        selectedOptions.forEach(option => {
            if (!correctAnswers.includes(option)) {
                allCorrect = false;
                document.querySelector(`input[name="answer16"][value="${option}"]`).parentElement.style.color = 'red';
            }
        });

        correctAnswers.forEach(answer => {
            if (!selectedOptions.includes(answer)) {
                allCorrect = false;
            }
        });

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question16');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background if needed
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answers are correct
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question16');
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
        attachSolutionButtonListeners_question16(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
