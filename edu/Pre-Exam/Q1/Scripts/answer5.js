document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question5(button);
    });
});

function attachSolutionButtonListeners_question5(button) {
    button.addEventListener('click', function() {
        // Reset highlight and incorrect styles
        document.querySelectorAll('.question-row').forEach(row => {
            row.classList.remove('incorrect', 'highlight');
        });

        // Check answers
        let allCorrect = true;
        const correctAnswers = {
            "question5-1": "Yes",
            "question5-2": "No",
            "question5-3": "No"
        };

        for (let key in correctAnswers) {
            const selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[key]) {
                document.querySelector(`input[name="${key}"][value="${correctAnswers[key]}"]`).parentElement.classList.add('highlight');
            } else {
                document.querySelector(`input[name="${key}"][value="${correctAnswers[key]}"]`).parentElement.classList.add('incorrect');
                allCorrect = false;
            }
        }

        // Update score if all answers are correct
        if (allCorrect) {
            score++; // Increment score if all answers are correct
            showFinalScore(); // Display final score
        }

        // Show explanation
        document.getElementById('solutionInfo_question5').style.display = 'block';
    });
}

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
