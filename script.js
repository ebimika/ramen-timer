let countdown;
let timeLeft = 300; 
let defaultTime = 300; 
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// 画面のタイマー表示を更新する関数
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// カウントダウンを開始する関数
function startTimer() {
    if (isRunning) return; // 既に動いていたら何もしない
    isRunning = true;

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(countdown);
            isRunning = false;
            alert('時間になりました！');
        }
    }, 1000);
}

// タイマーを一時停止する関数
function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

// タイマーをリセットする関数
function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = defaultTime;
    updateDisplay();
}

// 3分・5分などの時間を切り替える関数
function setTimerMode(minutes) {
    if (isRunning) return; 
    timeLeft = minutes * 60;
    defaultTime = minutes * 60;
    updateDisplay();
}

// 各ボタンにクリックイベントを設定
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// 最初に画面を表示したとき、タイマー表示を合わせる
updateDisplay();