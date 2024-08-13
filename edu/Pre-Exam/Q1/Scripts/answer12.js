function attachSolutionButtonListeners_question12(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons specific to question 12
        document.querySelectorAll('.radio-group input[name="answer12"]').forEach(input => {
            input.parentElement.style.color = '';
        });

        // Check the answer for question 12
        const selectedOption = document.querySelector('.radio-group input[name="answer12"]:checked');
        const correctAnswer = 'A';
        let allCorrect = false;

        // Check if the selected answer is correct
        if (selectedOption && selectedOption.value === correctAnswer) {
            allCorrect = true;
        } else {
            // Highlight the correct answer in red
            const correctOption = document.querySelector(`#answer12${correctAnswer}`);
            if (correctOption) {
                correctOption.parentElement.style.color = 'red';
            }
            if (selectedOption) {
                selectedOption.parentElement.style.color = 'red';
            }
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question12');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background if needed
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question12');
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
        attachSolutionButtonListeners_question12(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
