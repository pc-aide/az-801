function attachSolutionButtonListeners_question12(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les couleurs des réponses
        document.querySelectorAll('.answers div').forEach(div => {
            div.classList.remove('incorrect', 'highlight');
        });

        // Vérifier la réponse
        const correctAnswer = "A";
        const selectedOption = document.querySelector('input[name="q12"]:checked');
        const isCorrect = selectedOption && selectedOption.value === correctAnswer;
        if (isCorrect) {
            selectedOption.parentElement.classList.add('highlight');
            score++; // Incrémenter le score si la réponse est correcte
        } else {
            selectedOption && selectedOption.parentElement.classList.add('incorrect');
        }

        // Afficher les solutions
        const solutionInfoElement = document.getElementById('solutionInfo_question12');
        if (solutionInfoElement) {
            if (isCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
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
