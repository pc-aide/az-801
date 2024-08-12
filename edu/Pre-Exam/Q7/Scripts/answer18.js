// Function to handle drag and drop functionality for question 18
function setupDragAndDrop() {
  const cmdlets = document.querySelectorAll('.draggable');
  const dropZones = document.querySelectorAll('.dropzone');

  cmdlets.forEach(cmdlet => {
    cmdlet.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });
  });

  dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const cmdletId = e.dataTransfer.getData('text/plain');
      const cmdlet = document.getElementById(cmdletId);
      if (cmdlet) {
        dropZone.textContent = cmdlet.textContent; // Display cmdlet text in drop zone
        cmdlet.style.display = 'none'; // Hide cmdlet from original location
      }
    });
  });
}

// Function to attach event listeners to the solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    const correctAnswers = {
      dhcp1: {
        cmdlet1: 'Export-DhcpServer',
        cmdlet2: 'Remove-DhcpServerInDC'
      },
      dhcp2: {
        cmdlet3: 'Add-DhcpServerInDC',
        cmdlet4: 'Import-DhcpServer'
      }
    };

    const dhcp1Answers = {
      cmdlet1: document.getElementById('dhcp1_cmdlet1').textContent,
      cmdlet2: document.getElementById('dhcp1_cmdlet2').textContent
    };
    const dhcp2Answers = {
      cmdlet3: document.getElementById('dhcp2_cmdlet3').textContent,
      cmdlet4: document.getElementById('dhcp2_cmdlet4').textContent
    };

    // Clear previous styles
    document.querySelectorAll('.draggable').forEach(cmdlet => {
      cmdlet.classList.remove('highlight', 'incorrect');
    });

    // Apply highlight/incorrect styles for DHCP1
    Object.keys(dhcp1Answers).forEach(key => {
      const cmdletText = dhcp1Answers[key];
      if (Object.values(correctAnswers.dhcp1).includes(cmdletText)) {
        document.getElementById('dhcp1_' + key).classList.add('highlight');
      } else {
        document.getElementById('dhcp1_' + key).classList.add('incorrect');
      }
    });

    // Apply highlight/incorrect styles for DHCP2
    Object.keys(dhcp2Answers).forEach(key => {
      const cmdletText = dhcp2Answers[key];
      if (Object.values(correctAnswers.dhcp2).includes(cmdletText)) {
        document.getElementById('dhcp2_' + key).classList.add('highlight');
      } else {
        document.getElementById('dhcp2_' + key).classList.add('incorrect');
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      const allCorrect = Object.values(dhcp1Answers).every(cmdlet => Object.values(correctAnswers.dhcp1).includes(cmdlet)) &&
                        Object.values(dhcp2Answers).every(cmdlet => Object.values(correctAnswers.dhcp2).includes(cmdlet));
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score by 1 if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question18');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question18');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question18');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  setupDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question18(button);
  });
});

// Function to display final score
function showFinalScore() {
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScoreElement) {
    const percentage = (window.score / window.totalQuestions) * 100;
    finalScoreElement.textContent = `Final Score: ${window.score}/${window.totalQuestions} (${percentage.toFixed(2)}%)`;
  }
}
