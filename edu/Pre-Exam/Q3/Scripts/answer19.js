// Fonction pour activer le drag and drop
function enableDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const dropzones = document.querySelectorAll('.dropzone');

  draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging');
      });
  });

  dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          const dragging = document.querySelector('.dragging');
          if (dragging) {
              dropzone.appendChild(dragging);
          }
      });
  });
}

// Fonction pour attacher les écouteurs d'événements aux boutons de solution
function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
      // Réinitialiser les styles pour les zones de dépôt
      document.querySelectorAll('.dropzone').forEach(zone => {
          zone.classList.remove('incorrect', 'highlight');
      });

      // Définir les réponses correctes
      const correctAnswers = {
          'dropZone19-1': 'Restore the system state to an alternate location',
          'dropZone19-2': 'Mount AD to port 51389',
          'dropZone19-3': 'From AD Users & Computers, change the domain controller to localhost:51389',
          'dropZone19-4': 'View the membership of the group'
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
      const solutionInfoElement = document.getElementById('solutionInfo_question19');
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
              const correctAnswersElement = document.getElementById('correctAnswers_question19');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Afficher l'explication et les références
      const explanationElement = document.getElementById('explanation_question19');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question19');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      // Afficher le score final
      showFinalScore();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question19(button);
  });
});

function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      const percentage = (score / totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
