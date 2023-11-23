function makeBubble() {
  let clutter = "";

  for (let i = 0; i <= 139; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.getElementById("p-bottom").innerHTML = clutter;
}

let timer = 60;

function endTimer() {
  let runTimer = setInterval(function () {
    timer--;
    if (timer >= 0) {
      document.getElementById("timerval").textContent = timer;
    } else {
      clearInterval(runTimer);
      document.getElementById("p-bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

let hitrn = Math.floor(Math.random() * 10);

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").textContent = hitrn;
}

let score = 0;
function increaseScore() {
  score += 10;
  document.getElementById("scoreval").textContent = score;
}

document.getElementById("p-bottom").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum == hitrn) {
    getNewHit();
    increaseScore();
    makeBubble();
  }
});

makeBubble();
endTimer();
getNewHit();
