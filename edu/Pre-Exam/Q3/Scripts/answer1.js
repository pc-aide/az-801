document.addEventListener('DOMContentLoaded', function() {
    enableDragAndDrop_question01();
    document.querySelectorAll('.solutionButton[data-answer-name="question01"]').forEach(button => {
        attachSolutionButtonListeners_question01(button);
    });
});

function enableDragAndDrop_question01() {
    document.querySelectorAll('.draggable[data-question="question01"]').forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.dataTransfer.effectAllowed = 'move';
        });
    });

    document.querySelectorAll('.dropzone[data-question="question01"]').forEach(dropzone => {
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

function attachSolutionButtonListeners_question01(button) {
    button.addEventListener('click', function() {
        document.querySelectorAll('.dropzone[data-question="question01"]').forEach(zone => {
            zone.classList.remove('incorrect', 'highlight');
        });

        const correctAnswers = [
            "Add Cluster1 to WAC : Step 1",
            "Enable CredSSP : Step 2",
            "Add the Cluster-Aware Updating role : Step 3"
        ];

        correctAnswers.forEach((answer, index) => {
            const [correctAction, correctLabel] = answer.split(" : ");
            const dropZone = document.getElementById(`dropZone01-${index + 1}`);
            if (dropZone && dropZone.textContent.trim() === correctAction) {
                dropZone.classList.add('highlight');
            } else {
                dropZone.classList.add('incorrect');
                dropZone.textContent = ""; // Clear incorrect drop zones
            }
        });

        const solutionInfoElement = document.getElementById('solutionInfo_question01');
        if (solutionInfoElement) {
            const allCorrect = correctAnswers.every((answer, index) => {
                const [correctAction, correctLabel] = answer.split(" : ");
                return document.getElementById(`dropZone01-${index + 1}`).textContent.trim() === correctAction;
            });

            if (allCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                score++;
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question01');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        showFinalScore();
    });
}

function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
