// Fonction pour activer la fonctionnalité de glisser-déposer
function enableDragAndDrop() {
    document.querySelectorAll('.draggable').forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.dataTransfer.effectAllowed = 'move';
        });
    });

    document.querySelectorAll('.dropzone').forEach(dropzone => {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            dropzone.classList.add('highlight');
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('highlight');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(data);
            if (draggedElement) {
                e.target.textContent = draggedElement.dataset.action;
                e.target.dataset.action = draggedElement.dataset.action;
                e.target.dataset.itemId = draggedElement.id;
                dropzone.classList.remove('highlight');
            }
        });
    });
}

function attachSolutionButtonListeners_question16(button) {
    button.addEventListener('click', function() {
        // Réinitialiser les styles pour les zones de dépôt
        document.querySelectorAll('.dropzone').forEach(zone => {
            zone.classList.remove('incorrect', 'highlight');
        });

        // Vérifier les réponses
        const correctAnswers = [
            "Create a failover cluster",
            "Enable Storage Spaces Direct",
            "Create a volume"
        ];

        correctAnswers.forEach((answer, index) => {
            const dropZone = document.getElementById(`dropZone16-${index + 1}`);
            if (dropZone && dropZone.textContent.trim() === answer) {
                dropZone.classList.add('highlight');
            } else {
                dropZone.classList.add('incorrect');
                dropZone.textContent = ""; // Effacer les zones de dépôt incorrectes
            }
        });

        // Afficher les informations de solution
        const solutionInfoElement = document.getElementById('solutionInfo_question16');
        if (solutionInfoElement) {
            const allCorrect = correctAnswers.every((answer, index) => 
                document.getElementById(`dropZone16-${index + 1}`).textContent.trim() === answer
            );

            if (allCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                score++;
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question16');
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
    enableDragAndDrop();
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question16(button);
    });
});

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
