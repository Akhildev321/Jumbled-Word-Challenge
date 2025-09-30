// Word Lists
const WORD_LISTS = {
    easy: [
        { word: 'CAT', hint: 'A furry pet that meows', category: 'Animals' },
        { word: 'DOG', hint: 'Man\'s best friend', category: 'Animals' },
        { word: 'SUN', hint: 'Bright star in our sky', category: 'Nature' },
        { word: 'BOOK', hint: 'You read this for knowledge', category: 'Objects' },
        { word: 'TREE', hint: 'Tall plant with leaves and branches', category: 'Nature' },
        { word: 'FISH', hint: 'Swims in water and has gills', category: 'Animals' },
        { word: 'BIRD', hint: 'Has wings and can fly', category: 'Animals' },
        { word: 'MOON', hint: 'Shines at night in the sky', category: 'Nature' },
        { word: 'CAKE', hint: 'Sweet dessert for celebrations', category: 'Food' },
        { word: 'BALL', hint: 'Round object used in sports', category: 'Sports' },
        { word: 'HOUSE', hint: 'Place where people live', category: 'Places' },
        { word: 'WATER', hint: 'Clear liquid we drink', category: 'Nature' },
        { word: 'APPLE', hint: 'Red or green fruit', category: 'Food' },
        { word: 'CHAIR', hint: 'Furniture you sit on', category: 'Objects' },
        { word: 'SMILE', hint: 'Happy facial expression', category: 'Emotions' },
        { word: 'HEART', hint: 'Organ that pumps blood', category: 'Body' },
        { word: 'LIGHT', hint: 'Opposite of darkness', category: 'Concepts' },
        { word: 'MUSIC', hint: 'Sounds arranged in harmony', category: 'Arts' },
        { word: 'HAPPY', hint: 'Feeling of joy', category: 'Emotions' },
        { word: 'BREAD', hint: 'Baked food made from flour', category: 'Food' },
        { word: 'CLOUD', hint: 'White fluffy thing in sky', category: 'Nature' },
        { word: 'DANCE', hint: 'Moving to rhythm', category: 'Arts' },
        { word: 'DREAM', hint: 'Images in your sleep', category: 'Concepts' },
        { word: 'FLOWER', hint: 'Colorful part of a plant', category: 'Nature' },
        { word: 'FRIEND', hint: 'Someone you like and trust', category: 'People' }
    ],
    medium: [
        { word: 'ELEPHANT', hint: 'Large gray animal with a trunk', category: 'Animals' },
        { word: 'RAINBOW', hint: 'Colorful arc that appears after rain', category: 'Nature' },
        { word: 'COMPUTER', hint: 'Electronic device for processing data', category: 'Technology' },
        { word: 'BUTTERFLY', hint: 'Colorful insect that starts as a caterpillar', category: 'Animals' },
        { word: 'MOUNTAIN', hint: 'Very tall natural elevation of land', category: 'Geography' },
        { word: 'SANDWICH', hint: 'Food item with filling between bread slices', category: 'Food' },
        { word: 'BICYCLE', hint: 'Two-wheeled vehicle powered by pedaling', category: 'Transport' },
        { word: 'LIBRARY', hint: 'Building where books are kept and borrowed', category: 'Places' },
        { word: 'GUITAR', hint: 'Musical instrument with six strings', category: 'Music' },
        { word: 'GARDEN', hint: 'Area where plants and flowers are grown', category: 'Nature' },
        { word: 'KITCHEN', hint: 'Room where food is prepared', category: 'Places' },
        { word: 'TEACHER', hint: 'Person who educates students', category: 'Professions' },
        { word: 'PICTURE', hint: 'Visual representation or photograph', category: 'Arts' },
        { word: 'WEATHER', hint: 'Atmospheric conditions outside', category: 'Nature' },
        { word: 'HOLIDAY', hint: 'Special day of celebration or rest', category: 'Events' },
        { word: 'SCIENCE', hint: 'Study of the natural world', category: 'Education' },
        { word: 'HISTORY', hint: 'Study of past events', category: 'Education' },
        { word: 'MYSTERY', hint: 'Something difficult to understand', category: 'Concepts' },
        { word: 'JOURNEY', hint: 'A trip from one place to another', category: 'Travel' },
        { word: 'FREEDOM', hint: 'State of being free and independent', category: 'Concepts' },
        { word: 'COURAGE', hint: 'Bravery in the face of danger', category: 'Qualities' },
        { word: 'WISDOM', hint: 'Knowledge gained through experience', category: 'Qualities' },
        { word: 'BALANCE', hint: 'State of equilibrium', category: 'Concepts' },
        { word: 'HARMONY', hint: 'Pleasant combination of elements', category: 'Concepts' },
        { word: 'ADVENTURE', hint: 'Exciting and risky experience', category: 'Experiences' }
    ],
    hard: [
        { word: 'ENCYCLOPEDIA', hint: 'Comprehensive reference work with articles', category: 'Education' },
        { word: 'REFRIGERATOR', hint: 'Appliance that keeps food cold and fresh', category: 'Appliances' },
        { word: 'CONSTELLATION', hint: 'Group of stars forming a recognizable pattern', category: 'Astronomy' },
        { word: 'PHOTOGRAPHER', hint: 'Professional who captures images with a camera', category: 'Professions' },
        { word: 'ARCHITECTURE', hint: 'Art and science of designing buildings', category: 'Arts' },
        { word: 'TRANSPORTATION', hint: 'System of moving people or goods from place to place', category: 'Systems' },
        { word: 'EXTRAORDINARY', hint: 'Very unusual, remarkable, or surprising', category: 'Adjectives' },
        { word: 'UNDERSTANDING', hint: 'The ability to comprehend or grasp meaning', category: 'Concepts' },
        { word: 'RESPONSIBILITY', hint: 'Being accountable for one\'s actions or duties', category: 'Concepts' },
        { word: 'COMMUNICATION', hint: 'Process of sharing information between people', category: 'Concepts' },
        { word: 'ENVIRONMENTAL', hint: 'Relating to the natural world', category: 'Science' },
        { word: 'INVESTIGATION', hint: 'Systematic examination or inquiry', category: 'Actions' },
        { word: 'ORGANIZATION', hint: 'Structured group of people with a purpose', category: 'Concepts' },
        { word: 'CELEBRATION', hint: 'Observance of a special occasion', category: 'Events' },
        { word: 'DETERMINATION', hint: 'Firmness of purpose', category: 'Qualities' },
        { word: 'IMAGINATION', hint: 'Ability to form mental images', category: 'Psychology' },
        { word: 'EXPERIMENTAL', hint: 'Relating to scientific testing', category: 'Science' },
        { word: 'CONVERSATION', hint: 'Informal talk between people', category: 'Communication' },
        { word: 'RECOGNITION', hint: 'Acknowledgment of achievement', category: 'Concepts' },
        { word: 'DEVELOPMENT', hint: 'Process of growth or advancement', category: 'Concepts' },
        { word: 'EXPERIENCE', hint: 'Knowledge gained through living', category: 'Concepts' },
        { word: 'OPPORTUNITY', hint: 'Favorable circumstance', category: 'Concepts' },
        { word: 'POSSIBILITY', hint: 'Something that may happen', category: 'Concepts' },
        { word: 'RELATIONSHIP', hint: 'Connection between people', category: 'Social' },
        { word: 'UNDERSTAND', hint: 'Comprehend the meaning', category: 'Actions' }
    ]
};

// Sound Manager
class SoundManager {
    constructor() {
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        this.audioContext = null;
        this.initAudioContext();
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    playSound(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.soundEnabled || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playCorrectSound() {
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playSound(freq, 0.2, 'sine', 0.4);
            }, index * 100);
        });
    }

    playWrongSound() {
        this.playSound(200, 0.3, 'sawtooth', 0.3);
        setTimeout(() => {
            this.playSound(150, 0.3, 'sawtooth', 0.3);
        }, 150);
    }

    playHintSound() {
        this.playSound(800, 0.1, 'sine', 0.2);
        setTimeout(() => {
            this.playSound(1000, 0.1, 'sine', 0.2);
        }, 100);
    }

    playTickSound() {
        this.playSound(1000, 0.05, 'square', 0.1);
    }

    playGameStartSound() {
        const notes = [261.63, 329.63, 392.00, 523.25];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playSound(freq, 0.15, 'triangle', 0.3);
            }, index * 80);
        });
    }

    playGameOverSound() {
        const notes = [523.25, 493.88, 440.00, 392.00];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playSound(freq, 0.4, 'sine', 0.3);
            }, index * 200);
        });
    }

    playLevelCompleteSound() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playSound(freq, 0.3, 'sine', 0.4);
            }, index * 150);
        });
    }

    playButtonSound() {
        this.playSound(600, 0.05, 'square', 0.1);
    }

    toggle() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('soundEnabled', this.soundEnabled.toString());
        
        if (this.soundEnabled) {
            this.playButtonSound();
        }
        
        return this.soundEnabled;
    }

    isEnabled() {
        return this.soundEnabled;
    }
}

// Game Class
class JumbledWordGame {
    constructor() {
        this.words = { ...WORD_LISTS };
        this.customWords = [];
        this.currentWord = null;
        this.currentDifficulty = 'easy';
        this.score = 0;
        this.wordsCompleted = 0;
        this.currentStreak = 0;
        this.bestStreak = parseInt(localStorage.getItem('bestStreak')) || 0;
        this.timeLeft = 20;
        this.timer = null;
        this.scrambleTimer = null;
        this.hintsUsed = 0;
        this.maxHints = 3;
        this.gameActive = false;
        this.progressiveHintLevel = 0;
        this.eliminatedLetters = [];
        this.isCustomGame = false;
        this.keyPressed = false;
        this.currentLevelWords = [];
        this.totalWordsPerLevel = 10;
        this.totalHintsUsed = 0;

        this.init();
    }

    init() {
        this.updateDisplay();
        this.bindEvents();
        this.loadDarkMode();
    }

    bindEvents() {
        const guessInput = document.getElementById('guessInput');
        
        guessInput.addEventListener('keypress', (e) => {
            if (!this.keyPressed && this.gameActive) {
                this.keyPressed = true;
                this.stopScrambleAnimation();
            }
            
            if (e.key === 'Enter') {
                this.checkGuess();
            }
        });

        guessInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });

        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                soundManager.playButtonSound();
            });
        });
    }

    startGame(difficulty) {
        this.currentDifficulty = difficulty;
        this.score = 0;
        this.wordsCompleted = 0;
        this.currentStreak = 0;
        this.totalHintsUsed = 0;
        this.gameActive = true;
        this.isCustomGame = false;

        // Select 10 random words for this level
        this.currentLevelWords = this.selectRandomWords(this.words[difficulty], this.totalWordsPerLevel);

        document.getElementById('difficultySelection').classList.add('d-none');
        document.getElementById('gameArea').classList.remove('d-none');
        document.getElementById('gameOverScreen').classList.add('d-none');
        document.getElementById('levelCompleteScreen').classList.add('d-none');

        soundManager.playGameStartSound();
        this.nextWord();
        this.updateDisplay();
        this.updateProgress();
        this.showMessage('Game started! Good luck!', 'success');
    }

    selectRandomWords(wordList, count) {
        const shuffled = [...wordList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    startCustomGame() {
        if (this.customWords.length === 0) {
            this.showMessage('Please add some custom words first!', 'warning');
            return;
        }

        this.currentDifficulty = 'custom';
        this.score = 0;
        this.wordsCompleted = 0;
        this.currentStreak = 0;
        this.totalHintsUsed = 0;
        this.gameActive = true;
        this.isCustomGame = true;

        // Select up to 10 custom words
        this.currentLevelWords = this.selectRandomWords(this.customWords, Math.min(this.totalWordsPerLevel, this.customWords.length));

        document.getElementById('difficultySelection').classList.add('d-none');
        document.getElementById('customWordInput').classList.add('d-none');
        document.getElementById('gameArea').classList.remove('d-none');
        document.getElementById('gameOverScreen').classList.add('d-none');
        document.getElementById('levelCompleteScreen').classList.add('d-none');

        soundManager.playGameStartSound();
        this.nextWord();
        this.updateDisplay();
        this.updateProgress();
        this.showMessage('Custom game started!', 'success');
    }

    nextWord() {
        if (!this.gameActive) return;

        if (this.wordsCompleted >= this.currentLevelWords.length) {
            this.completeLevel();
            return;
        }

        this.currentWord = this.currentLevelWords[this.wordsCompleted];
        this.hintsUsed = 0;
        this.progressiveHintLevel = 0;
        this.timeLeft = 20;
        this.keyPressed = false;
        this.eliminatedLetters = [];

        this.displayScrambledWord();
        this.updateProgressiveHint();
        this.resetHintDisplay();
        this.startTimer();
        this.startScrambleAnimation();
        this.focusInput();

        document.getElementById('wordCategory').textContent = this.currentWord.category;
        document.getElementById('currentDifficulty').textContent = this.isCustomGame ? 'Custom' : this.currentDifficulty;
        document.getElementById('hintCount').textContent = this.maxHints - this.hintsUsed;
    }

    displayScrambledWord() {
        const scrambled = this.scrambleWord(this.currentWord.word);
        const scrambledElement = document.getElementById('scrambledWord');
        
        scrambledElement.innerHTML = '';
        scrambled.split('').forEach((letter, index) => {
            setTimeout(() => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.className = 'letter-animate';
                scrambledElement.appendChild(span);
            }, index * 100);
        });
    }

    startScrambleAnimation() {
        if (this.scrambleTimer) clearInterval(this.scrambleTimer);
        
        this.scrambleTimer = setInterval(() => {
            if (!this.keyPressed && this.gameActive) {
                const scrambledElement = document.getElementById('scrambledWord');
                scrambledElement.classList.add('scramble-animation');
                
                setTimeout(() => {
                    if (!this.keyPressed) {
                        const newScramble = this.scrambleWord(this.currentWord.word);
                        scrambledElement.textContent = newScramble;
                    }
                    scrambledElement.classList.remove('scramble-animation');
                }, 300);
            }
        }, 500);
    }

    stopScrambleAnimation() {
        if (this.scrambleTimer) {
            clearInterval(this.scrambleTimer);
            this.scrambleTimer = null;
        }
    }

    scrambleWord(word) {
        const letters = word.split('');
        let scrambled;
        let attempts = 0;

        do {
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
            scrambled = letters.join('');
            attempts++;
        } while (scrambled === word && attempts < 20);

        return scrambled;
    }

    updateProgressiveHint() {
        const word = this.currentWord.word;
        let hint = '';
        
        for (let i = 0; i < word.length; i++) {
            if (i < this.progressiveHintLevel) {
                hint += word[i] + ' ';
            } else {
                hint += '_ ';
            }
        }
        
        document.getElementById('progressiveHint').textContent = hint.trim();
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 5) {
                soundManager.playTickSound();
            }

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        const timerCircle = document.getElementById('timerCircle');
        
        timerDisplay.textContent = this.timeLeft;
        
        const percentage = (this.timeLeft / 20) * 360;
        const color = this.timeLeft <= 5 ? 'var(--danger-color)' : 'var(--success-color)';
        
        timerCircle.style.background = `conic-gradient(${color} ${percentage}deg, var(--border-color) ${percentage}deg)`;
        
        if (this.timeLeft <= 5) {
            timerCircle.classList.add('timer-warning');
        } else {
            timerCircle.classList.remove('timer-warning');
        }
    }

    checkGuess() {
        const guess = document.getElementById('guessInput').value.trim().toUpperCase();
        
        if (!guess) {
            this.showMessage('Please enter a guess!', 'warning');
            return;
        }

        if (guess === this.currentWord.word) {
            this.correctGuess();
        } else {
            this.wrongGuess();
        }
    }

    correctGuess() {
        clearInterval(this.timer);
        this.stopScrambleAnimation();

        // Fixed scoring - no time bonus, just base points
        const basePoints = {
            easy: 10,
            medium: 20,
            hard: 50,
            custom: 15
        };

        const points = basePoints[this.currentDifficulty] || 15;

        this.score += points;
        this.wordsCompleted++;
        this.currentStreak++;
        this.totalHintsUsed += this.hintsUsed;

        if (this.currentStreak > this.bestStreak) {
            this.bestStreak = this.currentStreak;
            localStorage.setItem('bestStreak', this.bestStreak.toString());
        }

        const input = document.getElementById('guessInput');
        input.classList.add('bounce');
        
        soundManager.playCorrectSound();
        this.showMessage(`🎉 Correct! +${points} points`, 'success');
        this.updateDisplay();
        this.updateProgress();

        setTimeout(() => {
            input.classList.remove('bounce');
            input.value = '';
            
            if (this.wordsCompleted >= this.currentLevelWords.length) {
                this.completeLevel();
            } else {
                this.nextWord();
            }
        }, 1500);
    }

    wrongGuess() {
        const input = document.getElementById('guessInput');
        input.classList.add('shake');
        
        soundManager.playWrongSound();
        this.showMessage('❌ Try again!', 'error');

        setTimeout(() => {
            input.classList.remove('shake');
            input.select();
        }, 800);
    }

    getHint() {
        if (this.hintsUsed >= this.maxHints) {
            this.showMessage('No more hints available!', 'warning');
            return;
        }

        this.hintsUsed++;
        soundManager.playHintSound();

        if (this.hintsUsed === 1) {
            document.getElementById('hintText').textContent = this.currentWord.hint;
            document.getElementById('hintDisplay').classList.remove('d-none');
            this.showMessage('Text hint revealed!', 'info');
        } else if (this.hintsUsed === 2) {
            this.progressiveHintLevel = Math.ceil(this.currentWord.word.length / 3);
            this.updateProgressiveHint();
            this.showMessage('Letter hint revealed!', 'info');
        } else if (this.hintsUsed === 3) {
            this.eliminateWrongLetters();
            this.showMessage('Wrong letters eliminated!', 'info');
            
            const hintBtn = document.getElementById('hintBtn');
            hintBtn.disabled = true;
            hintBtn.classList.add('opacity-50');
        }

        document.getElementById('hintCount').textContent = this.maxHints - this.hintsUsed;
    }

    eliminateWrongLetters() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const wordLetters = new Set(this.currentWord.word.split(''));
        const wrongLetters = [];
        
        for (let letter of alphabet) {
            if (!wordLetters.has(letter)) {
                wrongLetters.push(letter);
                if (wrongLetters.length >= 8) break;
            }
        }

        this.eliminatedLetters = wrongLetters;
        document.getElementById('eliminatedLetters').textContent = this.eliminatedLetters.join(', ');
        document.getElementById('letterEliminationDisplay').classList.remove('d-none');
    }

    skipWord() {
        this.currentStreak = 0;
        this.totalHintsUsed += this.hintsUsed;
        soundManager.playWrongSound();
        this.showMessage(`Word skipped: ${this.currentWord.word}`, 'warning');
        
        setTimeout(() => {
            this.wordsCompleted++;
            this.updateProgress();
            
            if (this.wordsCompleted >= this.currentLevelWords.length) {
                this.completeLevel();
            } else {
                this.nextWord();
            }
        }, 1500);
    }

    timeUp() {
        clearInterval(this.timer);
        this.stopScrambleAnimation();
        this.currentStreak = 0;
        this.totalHintsUsed += this.hintsUsed;
        
        soundManager.playWrongSound();
        this.showMessage(`⏰ Time's up! The word was: ${this.currentWord.word}`, 'error');

        setTimeout(() => {
            this.wordsCompleted++;
            this.updateProgress();
            
            if (this.wordsCompleted >= this.currentLevelWords.length) {
                this.completeLevel();
            } else {
                this.nextWord();
            }
        }, 2000);
    }

    completeLevel() {
        this.gameActive = false;
        clearInterval(this.timer);
        this.stopScrambleAnimation();

        // Calculate bonus for perfect run (no hints used)
        const perfectBonus = this.totalHintsUsed === 0 ? 100 : 0;
        this.score += perfectBonus;

        // Show level completion screen
        document.getElementById('gameArea').classList.add('d-none');
        document.getElementById('levelCompleteScreen').classList.remove('d-none');
        
        // Update completion screen
        document.getElementById('levelCompletionScore').textContent = this.score;
        document.getElementById('levelWordsCompleted').textContent = this.wordsCompleted;
        document.getElementById('levelFinalStreak').textContent = this.currentStreak;
        document.getElementById('levelHintsUsed').textContent = this.totalHintsUsed;

        soundManager.playLevelCompleteSound();
        
        let message = `Level complete! Final score: ${this.score}`;
        if (perfectBonus > 0) {
            message += ` (+${perfectBonus} perfect bonus!)`;
        }
        this.showMessage(message, 'success');
    }

    updateProgress() {
        const progress = (this.wordsCompleted / this.currentLevelWords.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${this.wordsCompleted + 1}/${this.currentLevelWords.length}`;
    }

    newGame() {
        if (confirm('Are you sure you want to start a new game? Your current progress will be lost.')) {
            this.endGame();
            this.showDifficultySelection();
        }
    }

    quitGame() {
        if (confirm('Are you sure you want to quit? Your current progress will be lost.')) {
            this.endGame();
        }
    }

    endGame() {
        this.gameActive = false;
        clearInterval(this.timer);
        this.stopScrambleAnimation();

        document.getElementById('gameArea').classList.add('d-none');
        document.getElementById('gameOverScreen').classList.remove('d-none');
        document.getElementById('finalScore').textContent = this.score;

        soundManager.playGameOverSound();
        this.showMessage(`Game ended! Final score: ${this.score}`, 'info');
    }

    showDifficultySelection() {
        document.getElementById('difficultySelection').classList.remove('d-none');
        document.getElementById('gameArea').classList.add('d-none');
        document.getElementById('gameOverScreen').classList.add('d-none');
        document.getElementById('levelCompleteScreen').classList.add('d-none');
        document.getElementById('customWordInput').classList.add('d-none');
        document.getElementById('jsonImport').classList.add('d-none');
        this.resetGame();
    }

    resetGame() {
        this.gameActive = false;
        clearInterval(this.timer);
        this.stopScrambleAnimation();
        this.resetHintDisplay();
        document.getElementById('guessInput').value = '';
        document.getElementById('letterEliminationDisplay').classList.add('d-none');
        document.getElementById('progressBar').style.width = '10%';
        document.getElementById('progressText').textContent = '1/10';
    }

    resetHintDisplay() {
        document.getElementById('hintDisplay').classList.add('d-none');
        const hintBtn = document.getElementById('hintBtn');
        hintBtn.disabled = false;
        hintBtn.classList.remove('opacity-50');
        document.getElementById('hintCount').textContent = this.maxHints;
    }

    focusInput() {
        setTimeout(() => {
            document.getElementById('guessInput').focus();
        }, 100);
    }

    updateDisplay() {
        document.getElementById('scoreDisplay').textContent = this.score;
        document.getElementById('wordsCompleted').textContent = this.wordsCompleted;
        document.getElementById('currentStreak').textContent = this.currentStreak;
        document.getElementById('bestStreak').textContent = this.bestStreak;
    }

    showMessage(text, type) {
        const messageContainer = document.getElementById('messageContainer');
        const message = document.createElement('div');
        message.className = `message message-${type}`;
        message.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${text}</span>
                <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `;

        messageContainer.appendChild(message);

        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 5000);
    }

    loadDarkMode() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('darkModeIcon').className = 'fas fa-sun';
        }
    }

    showCustomWordInput() {
        document.getElementById('customWordInput').classList.remove('d-none');
        document.getElementById('jsonImport').classList.add('d-none');
    }

    hideCustomWordInput() {
        document.getElementById('customWordInput').classList.add('d-none');
    }

    addCustomWord() {
        const word = document.getElementById('customWord').value.trim().toUpperCase();
        const hint = document.getElementById('customHint').value.trim();
        const category = document.getElementById('customCategory').value.trim();

        if (!word || !hint || !category) {
            this.showMessage('Please fill in all fields!', 'warning');
            return;
        }

        if (word.length < 3) {
            this.showMessage('Word must be at least 3 letters long!', 'warning');
            return;
        }

        this.customWords.push({ word, hint, category });
        document.getElementById('customWordCount').textContent = this.customWords.length;
        
        document.getElementById('customWord').value = '';
        document.getElementById('customHint').value = '';
        document.getElementById('customCategory').value = '';

        this.showMessage(`Added "${word}" to custom words!`, 'success');
    }

    showJSONImport() {
        document.getElementById('jsonImport').classList.remove('d-none');
        document.getElementById('customWordInput').classList.add('d-none');
    }

    hideJSONImport() {
        document.getElementById('jsonImport').classList.add('d-none');
    }

    importJSON() {
        const jsonText = document.getElementById('jsonInput').value.trim();
        
        if (!jsonText) {
            this.showMessage('Please enter JSON data!', 'warning');
            return;
        }

        try {
            const words = JSON.parse(jsonText);
            
            if (!Array.isArray(words)) {
                throw new Error('JSON must be an array');
            }

            let validWords = 0;
            words.forEach(wordObj => {
                if (wordObj.word && wordObj.hint && wordObj.category) {
                    this.customWords.push({
                        word: wordObj.word.toUpperCase(),
                        hint: wordObj.hint,
                        category: wordObj.category
                    });
                    validWords++;
                }
            });

            document.getElementById('customWordCount').textContent = this.customWords.length;
            document.getElementById('jsonInput').value = '';
            this.hideJSONImport();
            
            this.showMessage(`Imported ${validWords} words successfully!`, 'success');
        } catch (error) {
            this.showMessage('Invalid JSON format!', 'error');
        }
    }
}

// Initialize
const soundManager = new SoundManager();
const game = new JumbledWordGame();

// Global functions
function startGame(difficulty) {
    game.startGame(difficulty);
}

function checkGuess() {
    game.checkGuess();
}

function getHint() {
    game.getHint();
}

function skipWord() {
    game.skipWord();
}

function newGame() {
    game.newGame();
}

function quitGame() {
    game.quitGame();
}

function showDifficultySelection() {
    game.showDifficultySelection();
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const icon = document.getElementById('darkModeIcon');
    
    if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.removeAttribute('data-theme');
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'false');
    }
}

function toggleSound() {
    const enabled = soundManager.toggle();
    const icon = document.getElementById('soundIcon');
    icon.className = enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
}

function showCustomWordInput() {
    game.showCustomWordInput();
}

function hideCustomWordInput() {
    game.hideCustomWordInput();
}

function addCustomWord() {
    game.addCustomWord();
}

function startCustomGame() {
    game.startCustomGame();
}

function showJSONImport() {
    game.showJSONImport();
}

function hideJSONImport() {
    game.hideJSONImport();
}

function importJSON() {
    game.importJSON();
}