function attachSolutionButtonListeners_question3(button) {
    button.addEventListener('click', function() {
        // Reset the colors of the answers
        document.querySelectorAll('.question-row').forEach(row => {
            row.classList.remove('incorrect', 'highlight');
        });

        // Check the answer
        let allCorrect = true;

        const selectedAnswer = document.querySelector('input[name="question3"]:checked');
        if (selectedAnswer && selectedAnswer.value === 'B. No') {
            document.querySelector('input[name="question3"][value="B. No"]').parentElement.classList.add('highlight');
        } else {
            document.querySelector('input[name="question3"][value="B. No"]').parentElement.classList.add('incorrect');
            allCorrect = false;
        }

        // Update the score
        if (allCorrect) {
            score++;
        }
        showFinalScore();

        // Display the explanation
        document.getElementById('solutionInfo_question3').style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question3(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
