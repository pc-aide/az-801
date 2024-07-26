function attachSolutionButtonListeners_question14(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les couleurs des réponses
        document.querySelectorAll('#question14Form select').forEach(select => {
            select.classList.remove('incorrect', 'highlight');
        });

        // Vérifier la réponse
        const correctStorageType = "Standard";
        const correctAuthMethod = "Access key";
        const selectedStorageType = document.getElementById('storageType').value;
        const selectedAuthMethod = document.getElementById('authMethod').value;

        const isCorrect = selectedStorageType === correctStorageType && selectedAuthMethod === correctAuthMethod;
        if (isCorrect) {
            document.getElementById('storageType').classList.add('highlight');
            document.getElementById('authMethod').classList.add('highlight');
            score++; // Incrémenter le score si la réponse est correcte
        } else {
            if (selectedStorageType !== correctStorageType) {
                document.getElementById('storageType').classList.add('incorrect');
            }
            if (selectedAuthMethod !== correctAuthMethod) {
                document.getElementById('authMethod').classList.add('incorrect');
            }
        }

        // Afficher les solutions
        const solutionInfoElement = document.getElementById('solutionInfo_question14');
        if (solutionInfoElement) {
            if (isCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
        attachSolutionButtonListeners_question14(button);
    });
});
