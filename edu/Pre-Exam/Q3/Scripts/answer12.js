// Fonction pour attacher les écouteurs d'événements aux boutons de solution
function attachSolutionButtonListeners_question12(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les styles pour les zones de dépôt
        document.querySelectorAll('.dropzone').forEach(zone => {
            zone.classList.remove('incorrect', 'highlight');
        });

        // Définir les réponses correctes
        const correctAnswers = {
            'dropZone12-1': 'The Azure Site Recovery Mobility Service',
            'dropZone12-2': 'An Azure Site Recovery configuration server'
        };

        // Vérifier les réponses
        Object.keys(correctAnswers).forEach(id => {
            const dropZone = document.getElementById(id);
            if (dropZone && dropZone.textContent.trim() === correctAnswers[id]) {
                dropZone.classList.add('highlight');
            } else {
                dropZone.classList.add('incorrect');
            }
        });

        // Afficher les informations de solution
        const solutionInfoElement = document.getElementById('solutionInfo_question12');
        if (solutionInfoElement) {
            const allCorrect = Object.keys(correctAnswers).every(id => 
                document.getElementById(id).textContent.trim() === correctAnswers[id]
            );

            if (allCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                score++;
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

        // Afficher l'explication et les références
        const explanationElement = document.getElementById('explanation_question12');
        if (explanationElement) {
            explanationElement.style.display = 'block';
        }
        const referencesElement = document.getElementById('references_question12');
        if (referencesElement) {
            referencesElement.style.display = 'block';
        }

        showFinalScore();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    enableDragAndDrop();
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
