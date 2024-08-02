document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton[data-answer-name="question14"]').forEach(button => {
        attachSolutionButtonListeners_question14(button);
    });
});

function attachSolutionButtonListeners_question14(button) {
    button.addEventListener('click', function() {
        const host1Selection = document.getElementById('host1').value;
        const host2Selection = document.getElementById('host2').value;

        const correctAnswers = {
            host1: 'Planned Failover only',
            host2: 'Test Failover & Failover only'
        };

        const solutionInfoElement = document.getElementById('solutionInfo_question14');
        if (solutionInfoElement) {
            const correctAnswersElement = document.getElementById('correctAnswers_question14');
            if (host1Selection === correctAnswers.host1 && host2Selection === correctAnswers.host2) {
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
            const explanationSection = solutionInfoElement.querySelector('h3 + ul');
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
