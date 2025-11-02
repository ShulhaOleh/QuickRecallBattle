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
        { question: "uncoil", answer: "раскручиваться" },
        { question: "overripe", answer: "перезревший" },
        { question: "flexible", answer: "гибкий" },
        { question: "excellent", answer: "отличный" },
        { question: "terrible", answer: "ужасный" },
        { question: "disagree", answer: "не соглашаться" },
        { question: "roughly", answer: "примерно" },
        { question: "approximately", answer: "приблизительно" },
        { question: "additionally", answer: "дополнительно" },
        { question: "although", answer: "хотя" },
        { question: "however", answer: "однако" },
        { question: "despite", answer: "несмотря на" },
        { question: "benefit", answer: "преимущество" },
        { question: "weakness", answer: "слабость" },
        { question: "drawbacks", answer: "недостатки" },
        { question: "significant", answer: "значительный" },
        { question: "crucial", answer: "ключевой" },
        { question: "essential", answer: "необходимый" },
        { question: "vast", answer: "обширный" },
        { question: "miniscule", answer: "крошечный" },
        { question: "highlight", answer: "выделять" },
        { question: "incorporate", answer: "включать" },
        { question: "twofold", answer: "двойной" }
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
        { question: "Развернуться из свернутого состояния", answer: "раскручиваться" },
        { question: "Слишком спелый, часто непригодный к употреблению", answer: "перезревший" },
        { question: "Гибкий, легко приспосабливающийся", answer: "гибкий" },
        { question: "Очень хороший, превосходный", answer: "отличный" },
        { question: "Очень плохой, ужасный", answer: "ужасный" },
        { question: "Не соглашаться с кем-то", answer: "не соглашаться" },
        { question: "Примерно, в общих чертах", answer: "примерно" },
        { question: "Приблизительно, ориентировочно", answer: "приблизительно" },
        { question: "Кроме того, в дополнение", answer: "дополнительно" },
        { question: "Хотя, несмотря на то что", answer: "хотя" },
        { question: "Тем не менее, однако", answer: "однако" },
        { question: "Несмотря на что-то", answer: "несмотря на" },
        { question: "Польза, преимущество", answer: "преимущество" },
        { question: "Слабая сторона, недостаток", answer: "слабость" },
        { question: "Недостатки, минусы", answer: "недостатки" },
        { question: "Значительный, важный", answer: "значительный" },
        { question: "Крайне важный, решающий", answer: "ключевой" },
        { question: "Необходимый, существенный", answer: "необходимый" },
        { question: "Очень большой, обширный", answer: "обширный" },
        { question: "Крошечный, ничтожный", answer: "крошечный" },
        { question: "Выделять, подчеркивать", answer: "выделять" },
        { question: "Включать во что-то, объединять", answer: "включать" },
        { question: "Состоящий из двух частей; двойной", answer: "двойной" }
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
    currentAnswered: false,
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

const WEIGHTS_KEY = 'quickrecall:weights:v1';

function loadWeightsFromStorage() {
    try {
        const raw = localStorage.getItem(WEIGHTS_KEY);
        if (!raw) return {};
        return JSON.parse(raw);
    } catch (e) {
        return {};
    }
}

function saveWeightsToStorage() {
    try {
        const map = {};
        Object.keys(words).forEach(listName => {
            words[listName].forEach(w => {
                if (typeof w.weight === 'number') map[`${listName}::${w.question}`] = w.weight;
            });
        });
        localStorage.setItem(WEIGHTS_KEY, JSON.stringify(map));
    } catch (e) {
        
    }
}

function normalizeWords() {
    const stored = loadWeightsFromStorage();
    Object.keys(words).forEach(listName => {
        words[listName].forEach(w => {
            if (typeof w.weight !== 'number') w.weight = 1;
            const key = `${listName}::${w.question}`;
            if (stored && typeof stored[key] === 'number') {
                w.weight = stored[key];
            }
        });
    });
}

function pickWeighted(arr) {
    const total = arr.reduce((s, it) => s + (it.weight || 0), 0);
    if (total <= 0) return arr[Math.floor(Math.random() * arr.length)];
    let r = Math.random() * total;
    for (let i = 0; i < arr.length; i++) {
        r -= (arr[i].weight || 0);
        if (r <= 0) return arr[i];
    }
    return arr[arr.length - 1];
}

normalizeWords();

document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        gameState.mode = this.dataset.mode;
        const config = modeConfig[gameState.mode];
        updateModeOptions(gameState.mode);
    });
});

function updateModeOptions(mode) {
    const modeOptions = document.getElementById('modeOptions');
    const perLabel = document.getElementById('modeOptionPerLabel');
    const overallLabel = document.getElementById('modeOptionOverallLabel');
    if (mode === 'choice') {
        modeOptions.style.display = 'block';
        perLabel.textContent = `6 вопросов — по ${modeConfig.choice.timePerQuestion} секунд на каждый`;
        overallLabel.textContent = '30 секунд — вопросы идут подряд';
        document.getElementById('modeOptionPer').checked = true;
    } else if (mode === 'definition') {
        modeOptions.style.display = 'block';
        perLabel.textContent = `6 вопросов — по ${modeConfig.definition.timePerQuestion} секунд на каждый`;
        overallLabel.textContent = '30 секунд — вопросы идут подряд';
        document.getElementById('modeOptionPer').checked = true;
    } else {
        modeOptions.style.display = 'none';
    }
}

updateModeOptions(gameState.mode);

function startGame() {
    const baseConfig = modeConfig[gameState.mode];
    const selectedOption = document.querySelector('input[name="modeOption"]:checked')?.value || 'overall';

    let activeConfig = { timePerQuestion: null, questionsLimit: null, timeLimit: null };

    if (gameState.mode === 'choice' || gameState.mode === 'definition') {
        if (selectedOption === 'per') {
            activeConfig.timePerQuestion = baseConfig.timePerQuestion;
            activeConfig.questionsLimit = baseConfig.questionsLimit;
            activeConfig.timeLimit = null;
        } else {
            activeConfig.timePerQuestion = null;
            activeConfig.questionsLimit = null;
            activeConfig.timeLimit = 30;
        }
    } else {
        activeConfig = { timePerQuestion: baseConfig.timePerQuestion, questionsLimit: baseConfig.questionsLimit, timeLimit: baseConfig.timeLimit };
    }

    gameState = {
        mode: gameState.mode,
        score: 0,
        wrong: 0,
        streak: 0,
        maxStreak: 0,
        timeLeft: activeConfig.timePerQuestion || activeConfig.timeLimit,
        currentWord: null,
        usedWords: [],
        answeredWords: [],
        timerInterval: null,
        selectedChoice: null,
        currentAnswered: false,
        questionsTotal: activeConfig.questionsLimit || 0,
        questionsAnswered: 0,
        activeConfig: activeConfig
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
            const config = gameState.activeConfig;
            if (config.timePerQuestion) {
                handleTimeoutQuestion();
            } else {
                endGame();
            }
        }
    }, 1000);
}

function handleTimeoutQuestion() {
    const config = gameState.activeConfig;
    if (gameState.currentAnswered) return;

    gameState.answeredWords.push({
        question: gameState.currentWord.question,
        correctAnswer: gameState.currentWord.answer,
        userAnswer: 'Время вышло',
        isCorrect: false
    });
    
    gameState.wrong++;
    gameState.streak = 0;
    gameState.questionsAnswered++;
    
    if (gameState.currentWord && typeof gameState.currentWord.weight === 'number') {
        gameState.currentWord.weight = Math.min(5, gameState.currentWord.weight / 0.6);
        saveWeightsToStorage();
    }
    
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

    gameState.currentWord = pickWeighted(availableWords);
    gameState.usedWords.push(gameState.currentWord);
    gameState.selectedChoice = null;
    gameState.currentAnswered = false;

    document.getElementById('question').textContent = gameState.currentWord.question;
    
    const answerInput = document.getElementById('answerInput');
    const choicesContainer = document.getElementById('choices');
    const submitBtn = document.getElementById('submitBtn');
    
    if (gameState.mode === 'choice') {
        answerInput.classList.add('hidden');
        choicesContainer.classList.add('visible');
        generateChoices();
        submitBtn.style.display = 'none';
    } else {
        answerInput.classList.remove('hidden');
        answerInput.value = '';
        answerInput.className = 'answer-input';
        choicesContainer.classList.remove('visible');
        choicesContainer.innerHTML = '';
        submitBtn.style.display = '';
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
    if (gameState.mode === 'choice') {
        checkAnswer();
    }
}

function checkAnswer() {
    const correctAnswer = gameState.currentWord.answer.toLowerCase();
    const config = gameState.activeConfig;
    let userAnswer, isCorrect;
    
    if (gameState.mode === 'choice') {
        if (!gameState.selectedChoice) return;
        
        gameState.currentAnswered = true;
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
        
        gameState.currentAnswered = true;
        isCorrect = userAnswer.toLowerCase() === correctAnswer;
        input.className = isCorrect ? 'answer-input correct' : 'answer-input wrong';
    }

    gameState.currentAnswered = true;

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
        if (gameState.currentWord && typeof gameState.currentWord.weight === 'number') {
            gameState.currentWord.weight = Math.max(0.1, gameState.currentWord.weight * 0.6);
            saveWeightsToStorage();
        }
    } else {
        gameState.wrong++;
        gameState.streak = 0;
        if (gameState.currentWord && typeof gameState.currentWord.weight === 'number') {
            gameState.currentWord.weight = Math.min(5, gameState.currentWord.weight / 0.6);
            saveWeightsToStorage();
        }
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
    const config = gameState.activeConfig;
    const streakLabel = document.getElementById('streakLabel');
    
    if (config.questionsLimit) {
        streakLabel.textContent = 'Вопрос';
        const currentQuestion = Math.min(gameState.questionsAnswered + 1, gameState.questionsTotal);
        document.getElementById('streak').textContent = `${currentQuestion}/${gameState.questionsTotal}`;
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

function closeBtnHandler() {
    const resultScreen = document.getElementById('resultScreen');
    if (resultScreen.classList.contains('active')) {
        resetGame();
    } else {
        endGameEarly();
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
