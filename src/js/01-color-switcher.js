const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let colorIntervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
  colorIntervalId = setInterval(changeBgColor, 1000);
  e.target.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtnClick(e) {
  clearInterval(colorIntervalId);
  e.target.disabled = true;
  startBtn.disabled = false;
}

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
