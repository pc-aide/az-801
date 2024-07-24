function attachSolutionButtonListeners_question6(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les couleurs des réponses
        document.querySelectorAll('.solutionInfo').forEach(info => {
            info.classList.remove('incorrect', 'highlight');
        });

        // Vérifier les réponses
        const answers = {
            "q6-1": "No",
            "q6-2": "Yes",
            "q6-3": "Yes"
        };

        let allCorrect = true;

        Object.keys(answers).forEach(questionId => {
            const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
            const isCorrect = selectedOption && selectedOption.value === answers[questionId];
            if (isCorrect) {
                selectedOption.parentElement.classList.add('highlight');
            } else {
                selectedOption && selectedOption.parentElement.classList.add('incorrect');
                allCorrect = false;
            }
        });

        // Afficher les solutions
        const solutionInfoElement = document.getElementById('solutionInfo_question6');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                score++;
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question6');
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
        attachSolutionButtonListeners_question6(button);
    });
});
