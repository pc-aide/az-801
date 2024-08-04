// Function to enable drag-and-drop functionality
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

// Function to attach event listeners to the solution button for Question 8
function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
      // Reset styles for drop zones
      document.querySelectorAll('.dropzone').forEach(zone => {
          zone.classList.remove('incorrect', 'highlight');
      });

      // Define correct answers
      const correctAnswers = {
          '8_step1': 'az extension add',
          '8_step2': 'az vm repair create',
          '8_step3': 'az vm repair run',
          '8_step4': 'az vm repair restore'
      };

      // Check answers
      Object.keys(correctAnswers).forEach(id => {
          const dropZone = document.getElementById(id);
          if (dropZone && dropZone.textContent.trim() === correctAnswers[id]) {
              dropZone.classList.add('highlight');
          } else {
              dropZone.classList.add('incorrect');
          }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question8');
      if (solutionInfoElement) {
          const allCorrect = Object.keys(correctAnswers).every(id =>
              document.getElementById(id).textContent.trim() === correctAnswers[id]
          );

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment score if all answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question8');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question8');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question8');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question8(button);
  });
});

// Function to display the final score
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
      const percentage = (window.score / window.totalQuestions) * 100;
      finalScoreElement.textContent = `Final Score: ${window.score}/${window.totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
