document.addEventListener('DOMContentLoaded', function() {
    enableDragAndDrop_question13();
    document.querySelectorAll('.solutionButton[data-answer-name="question13"]').forEach(button => {
        attachSolutionButtonListeners_question13(button);
    });
});

function enableDragAndDrop_question13() {
    document.querySelectorAll('.draggable[data-question="question13"]').forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.dataTransfer.effectAllowed = 'move';
        });
    });

    document.querySelectorAll('.dropzone[data-question="question13"]').forEach(dropzone => {
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

function attachSolutionButtonListeners_question13(button) {
    button.addEventListener('click', function() {
        document.querySelectorAll('.dropzone[data-question="question13"]').forEach(zone => {
            zone.classList.remove('incorrect', 'highlight');
        });

        const correctAnswers = [
            { action: "Download the file recovery script for VM1", step: "Step 1" },
            { action: "Run the file script on VM2", step: "Step 2" },
            { action: "Copy the file by using File Explorer", step: "Step 3" },
            { action: "Unmount the disks", step: "Step 4" }
        ];

        let allCorrect = true;
        correctAnswers.forEach((correctAnswer, index) => {
            const dropZone = document.getElementById(`dropZone13-${index + 1}`);
            if (dropZone && dropZone.textContent.trim() === correctAnswer.action) {
                dropZone.classList.add('highlight');
            } else {
                dropZone.classList.add('incorrect');
                allCorrect = false;
            }
        });

        const solutionInfoElement = document.getElementById('solutionInfo_question13');
        if (solutionInfoElement) {
            if (allCorrect) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
                score++;
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question13');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            // Show the explanation and references after the solution is revealed
            const explanationSection = solutionInfoElement.querySelector('h3 + p');
            if (explanationSection) {
                explanationSection.style.display = 'block';
            }
            const referenceSection = solutionInfoElement.querySelector('ul');
            if (referenceSection) {
                referenceSection.style.display = 'block';
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
