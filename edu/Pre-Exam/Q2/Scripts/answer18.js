function attachSolutionButtonListeners_question18(button) {
    button.addEventListener('click', function() {
        // Reset styles for answers
        document.querySelectorAll('.answers select').forEach(select => {
            select.classList.remove('incorrect', 'highlight');
        });

        // Check the selected answers
        const correctAnswers = { file1Nodes: "1", file2Nodes: "3" };
        const file1Nodes = document.getElementById('file1Nodes').value;
        const file2Nodes = document.getElementById('file2Nodes').value;
        const isCorrectFile1 = file1Nodes === correctAnswers.file1Nodes;
        const isCorrectFile2 = file2Nodes === correctAnswers.file2Nodes;

        // Apply styles based on correctness
        if (isCorrectFile1) {
            document.getElementById('file1Nodes').classList.add('highlight');
        } else {
            document.getElementById('file1Nodes').classList.add('incorrect');
        }

        if (isCorrectFile2) {
            document.getElementById('file2Nodes').classList.add('highlight');
        } else {
            document.getElementById('file2Nodes').classList.add('incorrect');
        }

        // Increment score only if both answers are correct
        if (isCorrectFile1 && isCorrectFile2) {
            score++; // Increment the score if both answers are correct
        }

        // Display the solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question18');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';

            if (isCorrectFile1 && isCorrectFile2) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question18');
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
        attachSolutionButtonListeners_question18(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
