let score = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        score ++;
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    updateScore();
}

function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'a') {
        score ++;
        result2.textContent = "ถูกต้อง SOD ย่อมาจาก Store Operation Development";
        result2.style.color = 'green';
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
    updateScore();
}

function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `คะแนน: ${score}`; // Update score text
  }