const secondSpan = document.getElementById('seconds');
const tenSpan = document.getElementById('tens');

const start = document.getElementById('button-start');
const stop = document.getElementById('button-stop');
const reset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

const writeSeconds = () => {
  secondSpan.textContent = seconds;
}
const writeTens = () => {
  tenSpan.textContent = tens;
}

const startTime = () => {
  tens++;
  if (tens > 99) {
    seconds++;
    writeSeconds();
    tens = 0;
  }

  writeTens();
}

// 버튼 이벤트
start.onclick = () => {
  interval = setInterval(startTime, 10);
};

stop.onclick = () => {
  clearInterval(interval);
};

reset.onclick = () => {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  writeSeconds();
  writeTens();
}