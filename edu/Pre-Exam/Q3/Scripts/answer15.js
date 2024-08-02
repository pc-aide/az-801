document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton[data-answer-name="question15"]').forEach(button => {
        attachSolutionButtonListeners_question15(button);
    });
});

function attachSolutionButtonListeners_question15(button) {
    button.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="failoverOption"]:checked');
        const correctAnswer = 'a recovery plan';

        const solutionInfoElement = document.getElementById('solutionInfo_question15');
        if (solutionInfoElement) {
            const correctAnswersElement = document.getElementById('correctAnswers_question15');
            if (selectedOption && selectedOption.value === correctAnswer) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
                score++;
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }

            // Show the explanation and references after the solution is revealed
            const explanationSection = solutionInfoElement.querySelector('h3 + p');
            if (explanationSection) {
                explanationSection.style.display = 'block';
            }
            const referenceSection = solutionInfoElement.querySelector('ul');
            if (referenceSection) {
                referenceSection.style.display = 'block';
            }
            solutionInfoElement.style.display = 'block';
        }

        showFinalScore();
    });
}

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
