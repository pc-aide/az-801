function attachSolutionButtonListeners_question19(button) {
    button.addEventListener('click', function() {
        // Reset styles for answers
        document.querySelectorAll('.answers input[type="radio"]').forEach(radio => {
            radio.parentElement.classList.remove('incorrect', 'highlight');
        });

        // Check the selected answers
        const correctAnswers = { q19a1: "Yes", q19a2: "Yes", q19a3: "No" };
        const answer1 = document.querySelector('input[name="q19a1"]:checked');
        const answer2 = document.querySelector('input[name="q19a2"]:checked');
        const answer3 = document.querySelector('input[name="q19a3"]:checked');

        const isCorrectAnswer1 = answer1 && answer1.value === correctAnswers.q19a1;
        const isCorrectAnswer2 = answer2 && answer2.value === correctAnswers.q19a2;
        const isCorrectAnswer3 = answer3 && answer3.value === correctAnswers.q19a3;

        // Apply styles based on correctness
        if (isCorrectAnswer1) {
            answer1.parentElement.classList.add('highlight');
        } else if (answer1) {
            answer1.parentElement.classList.add('incorrect');
        }

        if (isCorrectAnswer2) {
            answer2.parentElement.classList.add('highlight');
        } else if (answer2) {
            answer2.parentElement.classList.add('incorrect');
        }

        if (isCorrectAnswer3) {
            answer3.parentElement.classList.add('highlight');
        } else if (answer3) {
            answer3.parentElement.classList.add('incorrect');
        }

        // Increment score only if all answers are correct
        if (isCorrectAnswer1 && isCorrectAnswer2 && isCorrectAnswer3) {
            score++; // Increment the score if all answers are correct
        }

        // Display the solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question19');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';

            if (isCorrectAnswer1 && isCorrectAnswer2 && isCorrectAnswer3) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question19');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
        }

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question19(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
