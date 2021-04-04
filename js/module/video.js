const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');

const player = document.querySelector('video');

player.removeAttribute('controls');

// play-pause
playPauseBtn.addEventListener("click", ()=>{
     if(player.paused) {
        player.play();
        playPauseBtn.innerHTML = '<img src="https://img.icons8.com/wired/30/000000/circled-pause.png"/>';
        // playPauseBtn.textContent = 'Pause';
      } else {
        player.pause();
        playPauseBtn.innerHTML = "<img src='https://img.icons8.com/wired/30/000000/play-button-circled.png'/>";
        // playPauseBtn.textContent = 'Play';
      }
});

// Stop - button

stopBtn.addEventListener("click", ()=>{
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

// Rewind
rwdBtn.addEventListener("click",()=>{
    player.currentTime -= 3;
});

fwdBtn.addEventListener("click",()=>{
    player.currentTime += 3;
    if(player.currentTime >= player.duration || player.paused) {
        player.pause();
        player.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    }
});

player.ontimeupdate = function() {
    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes<10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds<10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }
  
    mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
  };