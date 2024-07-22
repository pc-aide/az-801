function attachSolutionButtonListeners_question20(button) {
    button.addEventListener('click', function() {
        // Reset styles for dropdowns
        document.querySelectorAll('.dropdown-group select').forEach(select => {
            select.parentElement.style.color = '';
        });

        // Check the answers
        const selectedOptionC = document.getElementById('bitlockerVolumeC').value;
        const selectedOptionE = document.getElementById('bitlockerVolumeE').value;
        const correctAnswerC = 'Server1';
        const correctAnswerE = 'Server2';
        const allCorrect = selectedOptionC === correctAnswerC && selectedOptionE === correctAnswerE;

        // Highlight the selected answers
        if (selectedOptionC !== correctAnswerC) {
            document.getElementById('bitlockerVolumeC').parentElement.style.color = 'red';
        }
        if (selectedOptionE !== correctAnswerE) {
            document.getElementById('bitlockerVolumeE').parentElement.style.color = 'red';
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question20');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question20');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';

            // Always display references
            const referencesElement = document.getElementById('references_question20');
            if (referencesElement) {
                referencesElement.style.display = 'block';
            }
        }

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question20(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
