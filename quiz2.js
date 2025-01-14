function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const questions = [
        { name: 'q1', correct: '1' },
        { name: 'q2', correct: '1' },
        { name: 'q3', correct: '1' },
        { name: 'q4', correct: '1' },
        { name: 'q5', correct: '1' },
    ];

    questions.forEach(question => {
        const answer = form[question.name].value;
        if (answer === question.correct) {
            score += 4;
        } else if (answer !== '') {
            score -= 1;
        }
    });

    resultDiv.style.display = 'block';
    resultDiv.textContent = `Your score is: ${score}`;
}