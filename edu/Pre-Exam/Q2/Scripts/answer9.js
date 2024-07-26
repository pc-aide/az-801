function attachSolutionButtonListeners_question9(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les couleurs des réponses
        document.querySelectorAll('.answers div').forEach(div => {
            div.classList.remove('incorrect', 'highlight');
        });

        // Vérifier la réponse
        const correctAnswers = {
            ruleType: "Isolation",
            requirements: "Require authentication for inbound & outbound connections",
            authenticationMethod: "Computer (kerberos V5)"
        };
        let isCorrect = true;

        // Vérifier les réponses
        Object.keys(correctAnswers).forEach(key => {
            const selectedOption = document.querySelector(`select[name="q9"]#${key}`);
            if (selectedOption && selectedOption.value !== correctAnswers[key]) {
                selectedOption.parentElement.classList.add('incorrect');
                isCorrect = false;
            }
        });

        if (isCorrect) {
            Object.keys(correctAnswers).forEach(key => {
                const selectedOption = document.querySelector(`select[name="q9"]#${key}`);
                selectedOption.parentElement.classList.add('highlight');
            });
            score++;
        }

        // Afficher les solutions
        const correctAnswersElement = document.getElementById('correctAnswers_question9');
        if (correctAnswersElement) {
            correctAnswersElement.style.display = 'block';
        }

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question9(button);
    });
});
