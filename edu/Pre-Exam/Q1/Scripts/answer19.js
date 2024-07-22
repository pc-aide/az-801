function attachSolutionButtonListeners_question19(button) {
    button.addEventListener('click', function() {
        // Reset styles for dropdowns
        document.querySelectorAll('.dropdown-group select').forEach(select => {
            select.style.color = '';
        });

        // Get the selected options
        const actionSelect = document.getElementById('actionSelect').value;
        const parameterSelect = document.getElementById('parameterSelect').value;
        const correctAction = 'Add-BitlockerKeyProtector';
        const correctParameter = '-Service';
        const allCorrect = actionSelect === correctAction && parameterSelect === correctParameter;

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question19');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation and correct answer
                solutionInfoElement.classList.remove('incorrect');
                score++; // Increment the score if the answer is correct
            } else {
                if (actionSelect !== correctAction) {
                    document.getElementById('actionSelect').style.color = 'red';
                }
                if (parameterSelect !== correctParameter) {
                    document.getElementById('parameterSelect').style.color = 'red';
                }
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question19');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
                const referenceElement = document.getElementById('reference_question19');
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
        attachSolutionButtonListeners_question19(button);
    });
});
