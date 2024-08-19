// Constants
var score = 0; // Initialiser le score à 0
var totalQuestions = 4; // Nombre total de questions

// Functions
function showFinalScore() {
    var percentage = (score / totalQuestions) * 100; // Calculer le score en pourcentage
    document.getElementById('finalScore').textContent = "Final Score: " + score + "/" + totalQuestions + " (" + percentage.toFixed(2) + "%)";
}

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
                e.target.dataset.itemId = draggedElement.id;
                dropzone.classList.remove('highlight');
            }
        });
    });
}

function loadQuestions(files) {
    files.forEach(file => {
        fetch('Questionnaire/' + file)
            .then(response => response.text())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = data;
                document.getElementById('questionContainer').appendChild(div);

                enableDragAndDrop(); // Assurez-vous que le drag-and-drop est activé

                // Attacher les écouteurs d'événements pour chaque bouton "Solution"
                const solutionButtons = div.querySelectorAll('.solutionButton');
                solutionButtons.forEach(button => {
                    const answerName = button.dataset.answerName;
                    const functionName = `attachSolutionButtonListeners_${answerName}`;
                    if (typeof window[functionName] === 'function') {
                        window[functionName](button);
                    } else {
                        console.error(`Function ${functionName} is not defined`);
                    }
                });
            })
            .catch(error => console.error('Error loading question:', error));
    });
}

function loadScripts(scripts) {
    return Promise.all(scripts.map(script => {
        return new Promise((resolve) => {
            const scriptTag = document.createElement('script');
            scriptTag.src = 'Scripts/' + script;
            scriptTag.onload = resolve;
            scriptTag.onerror = (error) => {
                if (error.target.src.includes('404')) {
                    console.warn(`Script not found: ${script}`);
                    resolve(); // Ignore 404 errors and resolve the promise
                } else {
                    console.error(`Failed to load script: ${script}`, error);
                    resolve(); // Resolve the promise even on error to continue loading other scripts
                }
            };
            document.body.appendChild(scriptTag);
        });
    }));
}

document.addEventListener('DOMContentLoaded', function() {
    // Charger tous les scripts de réponse
    loadScripts([
        'answer1.js', 'answer2.js', 'answer3.js'
    ])
    .then(() => {
        // Charger toutes les questions après que tous les scripts de réponse sont chargés
        loadQuestions([
            'question1.html', 'question2.html', 'question3.html', 'question4.html'
        ]);
    })
    .catch(error => console.error('Error loading scripts:', error));
});
