function attachSolutionButtonListeners_question18(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('.radio-group input[type="radio"]').forEach(radio => {
            radio.parentElement.style.color = '';
        });

        // Check the answers
        const selectedOption = document.querySelector('input[name="answer18"]:checked');
        const correctAnswer = 'C';
        const allCorrect = selectedOption && selectedOption.value === correctAnswer;

        // Highlight the selected answer
        if (selectedOption) {
            if (selectedOption.value !== correctAnswer) {
                selectedOption.parentElement.style.color = 'red';
            }
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question18');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation and correct answer
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question18');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
                const referenceElement = document.getElementById('reference_question18');
                if (referenceElement) {
                    referenceElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question18(button);
    });
});
