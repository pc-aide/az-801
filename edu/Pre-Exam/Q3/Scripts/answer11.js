// Attach event listeners to solution buttons
function attachSolutionButtonListeners_question11(button) {
    button.addEventListener('click', function() {
        // Reset styles for dropdown menus
        document.querySelectorAll('select').forEach(select => {
            select.style.backgroundColor = '';
        });

        // Initialize local score counter for this question
        let correctCount = 0;

        // Define correct answers
        const correctAnswers = {
            clusterAction: 'Configure monitoring of the VM1 cluster role',
            vmAction: 'Configure the Recovery settings of Service1'
        };

        // Check and highlight answers for Cluster1
        const selectedClusterAction = document.getElementById('clusterAction').value;
        if (selectedClusterAction === correctAnswers.clusterAction) {
            correctCount++;
        } else {
            document.getElementById('clusterAction').style.backgroundColor = 'red';
        }

        // Check and highlight answers for VM1
        const selectedVmAction = document.getElementById('vmAction').value;
        if (selectedVmAction === correctAnswers.vmAction) {
            correctCount++;
        } else {
            document.getElementById('vmAction').style.backgroundColor = 'red';
        }

        // Update global score
        if (correctCount === 2) {
            score += 1; // Increment score if both answers are correct
        }

        // Display solution info
        const solutionInfoElement = document.getElementById('solutionInfo_question11');
        if (solutionInfoElement) {
            if (correctCount === 2) {
                solutionInfoElement.classList.add('highlight'); // Apply yellow background to explanation, correct answer, and references
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question11');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        // Calculate and show final score
        showFinalScore();
    });
}

// Initialize event listeners for all solution buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question11(button);
    });
});

// Function to display final score
function showFinalScore() {
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
        // Using constants from constants.js
        const percentage = (score / totalQuestions) * 100;
        finalScoreElement.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    }
}
