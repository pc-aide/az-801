// Fonction pour activer les fonctionnalités de glisser-déposer
function enableDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const dropZones = document.querySelectorAll('.dropzone');

  draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', function(event) {
          event.dataTransfer.setData('text/plain', event.target.id);
      });
  });

  dropZones.forEach(dropZone => {
      dropZone.addEventListener('dragover', function(event) {
          event.preventDefault();
      });

      dropZone.addEventListener('drop', function(event) {
          event.preventDefault();
          const id = event.dataTransfer.getData('text/plain');
          const draggableElement = document.getElementById(id);
          if (dropZone && draggableElement) {
              dropZone.innerHTML = draggableElement.innerHTML;
              draggableElement.parentNode.removeChild(draggableElement);
          }
      });
  });
}

// Fonction pour attacher les écouteurs d'événements aux boutons de solution pour la question 20
function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
      // Réinitialiser les styles pour les zones de dépôt
      document.querySelectorAll('.dropzone').forEach(zone => {
          zone.classList.remove('incorrect', 'highlight');
      });

      // Définir les réponses correctes
      const correctAnswers = {
          'dropZone20-1': 'Download the Microsoft Azure Recovery Services (MARS) agent & the Vault Credentials file',
          'dropZone20-2': 'Run the Microsoft Azure Recovery Services Agent Setup Wizard',
          'dropZone20-3': 'Run the Register Server Wizard',
          'dropZone20-4': 'From Microsoft Azure Backup, run the Schedule Backup Wizard',
          'dropZone20-5': 'From Microsoft Azure Backup, run the Backup Up Now Wizard'
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
      const solutionInfoElement = document.getElementById('solutionInfo_question20');
      if (solutionInfoElement) {
          const allCorrect = Object.keys(correctAnswers).every(id => 
              document.getElementById(id).textContent.trim() === correctAnswers[id]
          );

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Incrémenter le score si toutes les réponses sont correctes
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question20');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Afficher l'explication et les références
      const explanationElement = document.getElementById('explanation_question20');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question20');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Afficher le score final
  });
}

// Initialiser les fonctionnalités au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question20(button);
  });
});

// Fonction pour afficher le score final
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      const percentage = (window.score / window.totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${window.score}/${window.totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
