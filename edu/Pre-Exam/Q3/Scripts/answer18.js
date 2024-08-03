document.addEventListener('DOMContentLoaded', function() {
    attachSolutionButtonListeners_question18();
});

function attachSolutionButtonListeners_question18() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        button.addEventListener('click', function() {
            const correctAnswers = ['A', 'D'];
            const checkboxes = document.querySelectorAll('input[name="q18"]:checked');
            let userAnswers = [];
            checkboxes.forEach(checkbox => userAnswers.push(checkbox.value));

            // Reset styles for all checkboxes
            document.querySelectorAll('input[name="q18"]').forEach(checkbox => {
                checkbox.parentNode.style.color = 'black';
            });

            // Highlight correct and incorrect answers
            let allCorrect = true;
            userAnswers.forEach(answer => {
                if (correctAnswers.includes(answer)) {
                    document.querySelector(`input[name="q18"][value="${answer}"]`).parentNode.style.color = 'green';
                } else {
                    document.querySelector(`input[name="q18"][value="${answer}"]`).parentNode.style.color = 'red';
                    allCorrect = false;
                }
            });

            // Highlight missing correct answers
            correctAnswers.forEach(answer => {
                if (!userAnswers.includes(answer)) {
                    document.querySelector(`input[name="q18"][value="${answer}"]`).parentNode.style.color = 'green';
                    allCorrect = false;
                }
            });

            // Show solution info
            const solutionInfoElement = document.getElementById('solutionInfo_question18');
            if (solutionInfoElement) {
                if (allCorrect) {
                    solutionInfoElement.classList.add('highlight');
                    solutionInfoElement.classList.remove('incorrect');
                    score++;
                } else {
                    solutionInfoElement.classList.add('incorrect');
                    solutionInfoElement.classList.remove('highlight');
                    const correctAnswersElement = document.getElementById('correctAnswers_question18');
                    if (correctAnswersElement) {
                        correctAnswersElement.style.display = 'block';
                    }
                }
                solutionInfoElement.style.display = 'block';
            }

            // Show explanation and references
            const explanationElement = document.getElementById('explanation_question18');
            if (explanationElement) {
                explanationElement.style.display = 'block';
            }
            const referencesElement = document.getElementById('references_question18');
            if (referencesElement) {
                referencesElement.style.display = 'block';
            }

            showFinalScore();
        });
    });
}

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
