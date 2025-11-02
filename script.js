const words = {
    translation: [
        { question: "contrarian", answer: "противник" },
        { question: "secondarily", answer: "вторично" },
        { question: "hush", answer: "тишина" },
        { question: "adherent", answer: "приверженец" },
        { question: "disinclination", answer: "нежелание" },
        { question: "efficiency", answer: "эффективность" },
        { question: "deem", answer: "считать" },
        { question: "perishable", answer: "скоропортящийся" },
        { question: "merely", answer: "просто" },
        { question: "glanced", answer: "взглянул" },
        { question: "foe", answer: "враг" },
        { question: "peninsula", answer: "полуостров" },
        { question: "widely", answer: "широко" },
        { question: "spare", answer: "запасной" },
        { question: "prowl", answer: "красться" },
        { question: "tacit", answer: "негласный" },
        { question: "shrunken", answer: "сжавшийся" },
        { question: "hoc", answer: "специальный" },
        { question: "goalie", answer: "вратарь" },
        { question: "provost", answer: "декан" },
        { question: "bridging", answer: "соединение" },
        { question: "folktale", answer: "сказка" },
        { question: "pinstripe", answer: "полоска" },
        { question: "garnished", answer: "украшенный" },
        { question: "uncoil", answer: "раскручиваться" }
    ],
    definition: [
        { question: "Человек, выступающий против общепринятого мнения", answer: "противник" },
        { question: "Во вторую очередь, менее важно", answer: "вторично" },
        { question: "Отсутствие звука, молчание", answer: "тишина" },
        { question: "Последователь идеи или учения", answer: "приверженец" },
        { question: "Отсутствие желания что-то делать", answer: "нежелание" },
        { question: "Способность достигать результата с минимумом затрат", answer: "эффективность" },
        { question: "Полагать, расценивать как что-то", answer: "считать" },
        { question: "Продукт, который быстро портится", answer: "скоропортящийся" },
        { question: "Только, не более чем", answer: "просто" },
        { question: "Быстро посмотрел на что-то", answer: "взглянул" },
        { question: "Противник в бою или конфликте", answer: "враг" },
        { question: "Участок суши, окруженный водой с трех сторон", answer: "полуостров" },
        { question: "В большом масштабе, повсеместно", answer: "широко" },
        { question: "Дополнительный, резервный", answer: "запасной" },
        { question: "Передвигаться скрытно в поисках добычи", answer: "красться" },
        { question: "Невысказанный, подразумеваемый", answer: "негласный" },
        { question: "Уменьшившийся в размере", answer: "сжавшийся" },
        { question: "Созданный для конкретной цели", answer: "специальный" },
        { question: "Игрок, защищающий ворота", answer: "вратарь" },
        { question: "Руководитель факультета в университете", answer: "декан" },
        { question: "Процесс создания связи между объектами", answer: "соединение" },
        { question: "Традиционная история из народного творчества", answer: "сказка" },
        { question: "Тонкая вертикальная линия на ткани", answer: "полоска" },
        { question: "Украшенный декоративными элементами", answer: "украшенный" },
        { question: "Развернуться из свернутого состояния", answer: "раскручиваться" }
    ]
};

let gameState = {
    mode: 'translation',
    score: 0,
    wrong: 0,
    streak: 0,
    maxStreak: 0,
    timeLeft: 30,
    currentWord: null,
    usedWords: [],
    answeredWords: [],
    timerInterval: null,
    selectedChoice: null,
    questionsTotal: 0,
    questionsAnswered: 0
};

const modeConfig = {
    translation: {
        description: '30 секунд на максимум правильных ответов',
        timeLimit: 30,
        timePerQuestion: null,
        questionsLimit: null
    },
    definition: {
        description: '6 вопросов по 20 секунд каждый',
        timeLimit: null,
        timePerQuestion: 20,
        questionsLimit: 6
    },
    choice: {
        description: '6 вопросов по 5 секунд каждый',
        timeLimit: null,
        timePerQuestion: 5,
        questionsLimit: 6
    }
};

document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        gameState.mode = this.dataset.mode;
        
        const config = modeConfig[gameState.mode];
        document.getElementById('modeDescription').textContent = config.description;
    });
});

function startGame() {
    const config = modeConfig[gameState.mode];
    
    gameState = {
        mode: gameState.mode,
        score: 0,
        wrong: 0,
        streak: 0,
        maxStreak: 0,
        timeLeft: config.timePerQuestion || config.timeLimit,
        currentWord: null,
        usedWords: [],
        answeredWords: [],
        timerInterval: null,
        selectedChoice: null,
        questionsTotal: config.questionsLimit || 0,
        questionsAnswered: 0
    };

    showScreen('gameScreen');
    document.getElementById('closeBtn').classList.add('visible');
    updateStats();
    loadNextWord();
    startTimer();
    
    if (gameState.mode !== 'choice') {
        document.getElementById('answerInput').focus();
    }
}

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('timer').textContent = gameState.timeLeft;

        if (gameState.timeLeft <= 0) {
            const config = modeConfig[gameState.mode];
            
            if (config.timePerQuestion) {
                handleTimeoutQuestion();
            } else {
                endGame();
            }
        }
    }, 1000);
}

function handleTimeoutQuestion() {
    const config = modeConfig[gameState.mode];
    
    gameState.answeredWords.push({
        question: gameState.currentWord.question,
        correctAnswer: gameState.currentWord.answer,
        userAnswer: 'Время вышло',
        isCorrect: false
    });
    
    gameState.wrong++;
    gameState.streak = 0;
    gameState.questionsAnswered++;
    
    updateStats();
    
    if (gameState.questionsAnswered >= gameState.questionsTotal) {
        endGame();
    } else {
        gameState.timeLeft = config.timePerQuestion;
        loadNextWord();
    }
}

function loadNextWord() {
    const sourceWords = gameState.mode === 'choice' ? words.translation : words[gameState.mode];
    const availableWords = sourceWords.filter(
        w => !gameState.usedWords.includes(w)
    );

    if (availableWords.length === 0) {
        gameState.usedWords = [];
        return loadNextWord();
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    gameState.currentWord = availableWords[randomIndex];
    gameState.usedWords.push(gameState.currentWord);
    gameState.selectedChoice = null;

    document.getElementById('question').textContent = gameState.currentWord.question;
    
    const answerInput = document.getElementById('answerInput');
    const choicesContainer = document.getElementById('choices');
    const submitBtn = document.getElementById('submitBtn');
    
    if (gameState.mode === 'choice') {
        answerInput.classList.add('hidden');
        choicesContainer.classList.add('visible');
        generateChoices();
    } else {
        answerInput.classList.remove('hidden');
        answerInput.value = '';
        answerInput.className = 'answer-input';
        choicesContainer.classList.remove('visible');
        choicesContainer.innerHTML = '';
    }
    
    submitBtn.disabled = false;
}

function generateChoices() {
    const correctAnswer = gameState.currentWord.answer;
    const allAnswers = words.translation.map(w => w.answer);
    const wrongAnswers = allAnswers.filter(a => a !== correctAnswer);
    
    const shuffledWrong = wrongAnswers.sort(() => Math.random() - 0.5);
    const choices = [correctAnswer, shuffledWrong[0], shuffledWrong[1]];
    const shuffledChoices = choices.sort(() => Math.random() - 0.5);
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    shuffledChoices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => selectChoice(choice, btn);
        choicesContainer.appendChild(btn);
    });
}

function selectChoice(choice, btn) {
    document.querySelectorAll('.choice-btn').forEach(b => {
        b.classList.remove('selected');
    });
    btn.classList.add('selected');
    gameState.selectedChoice = choice;
}

function checkAnswer() {
    const correctAnswer = gameState.currentWord.answer.toLowerCase();
    const config = modeConfig[gameState.mode];
    let userAnswer, isCorrect;
    
    if (gameState.mode === 'choice') {
        if (!gameState.selectedChoice) return;
        
        userAnswer = gameState.selectedChoice;
        isCorrect = userAnswer.toLowerCase() === correctAnswer;
        
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
            const btnAnswer = btn.textContent.toLowerCase();
            if (btnAnswer === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected') && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
    } else {
        const input = document.getElementById('answerInput');
        userAnswer = input.value.trim();
        
        if (userAnswer === '') return;
        
        isCorrect = userAnswer.toLowerCase() === correctAnswer;
        input.className = isCorrect ? 'answer-input correct' : 'answer-input wrong';
    }

    gameState.answeredWords.push({
        question: gameState.currentWord.question,
        correctAnswer: gameState.currentWord.answer,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        gameState.score++;
        gameState.streak++;
        gameState.maxStreak = Math.max(gameState.maxStreak, gameState.streak);
    } else {
        gameState.wrong++;
        gameState.streak = 0;
    }

    if (config.questionsLimit) {
        gameState.questionsAnswered++;
    }

    updateStats();
    document.getElementById('submitBtn').disabled = true;

    const delay = gameState.mode === 'choice' ? 800 : 300;
    
    setTimeout(() => {
        if (config.questionsLimit && gameState.questionsAnswered >= gameState.questionsTotal) {
            endGame();
        } else {
            if (config.timePerQuestion) {
                gameState.timeLeft = config.timePerQuestion;
            }
            loadNextWord();
            if (gameState.mode !== 'choice') {
                document.getElementById('answerInput').focus();
            }
        }
    }, delay);
}

function updateStats() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('streak').textContent = gameState.streak;
    
    const config = modeConfig[gameState.mode];
    const streakLabel = document.getElementById('streakLabel');
    
    if (config.questionsLimit) {
        streakLabel.textContent = 'Вопрос';
        document.getElementById('streak').textContent = `${gameState.questionsAnswered + 1}/${gameState.questionsTotal}`;
    } else {
        streakLabel.textContent = 'Подряд';
        document.getElementById('streak').textContent = gameState.streak;
    }
}

function endGame() {
    clearInterval(gameState.timerInterval);
    
    const totalAnswers = gameState.score + gameState.wrong;
    const accuracy = totalAnswers > 0 ? Math.round((gameState.score / totalAnswers) * 100) : 0;

    document.getElementById('finalCorrect').textContent = gameState.score;
    document.getElementById('finalWrong').textContent = gameState.wrong;
    document.getElementById('finalStreak').textContent = gameState.maxStreak;
    document.getElementById('accuracy').textContent = accuracy + '%';

    let title, feedback;
    if (gameState.score >= 20) {
        title = 'Невероятно!';
        feedback = 'Феноменальный результат! Вы настоящий мастер!';
    } else if (gameState.score >= 15) {
        title = 'Отлично!';
        feedback = 'Прекрасная работа! Вы очень быстры!';
    } else if (gameState.score >= 10) {
        title = 'Хорошо!';
        feedback = 'Отличный результат! Продолжайте тренироваться!';
    } else if (gameState.score >= 5) {
        title = 'Неплохо!';
        feedback = 'Хорошее начало! Ещё немного практики!';
    } else {
        title = 'Начало!';
        feedback = 'Отличное начало! Практика делает совершенство!';
    }

    document.getElementById('resultTitle').textContent = title;
    document.getElementById('feedback').textContent = feedback;

    displayWordsTable();

    showScreen('resultScreen');
}

function displayWordsTable() {
    const tableContainer = document.getElementById('wordsTable');
    
    if (gameState.answeredWords.length === 0) {
        tableContainer.innerHTML = '';
        return;
    }

    let tableHTML = '<div class="words-table-title">Результаты по словам</div>';
    
    gameState.answeredWords.forEach(word => {
        const rowClass = word.isCorrect ? 'correct' : 'wrong';
        
        if (word.isCorrect) {
            tableHTML += `
                <div class="word-row ${rowClass}">
                    <div class="word-question">${word.question}</div>
                    <div class="answer-container">
                        <div class="word-answer">${word.correctAnswer}</div>
                    </div>
                </div>
            `;
        } else {
            tableHTML += `
                <div class="word-row ${rowClass}">
                    <div class="word-question">${word.question}</div>
                    <div class="answer-container">
                        <div class="word-answer wrong-answer">${word.userAnswer}</div>
                        <div class="word-answer correct-answer">${word.correctAnswer}</div>
                    </div>
                </div>
            `;
        }
    });
    
    tableContainer.innerHTML = tableHTML;
}

function endGameEarly() {
    if (confirm('Вы уверены, что хотите закончить досрочно?')) {
        endGame();
    }
}

function resetGame() {
    document.getElementById('closeBtn').classList.remove('visible');
    showScreen('startScreen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

document.getElementById('answerInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
