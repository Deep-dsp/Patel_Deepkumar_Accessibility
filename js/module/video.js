const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');
const caption = document.querySelector('.caption');
const mute = document.querySelector('#mute');

const player = document.querySelector('video');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

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
    playPauseBtn.innerHTML = "<img src='https://img.icons8.com/wired/30/000000/play-button-circled.png'/>";
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
        playPauseBtn.innerHTML = "<img src='https://img.icons8.com/wired/30/000000/play-button-circled.png'/>";
    }
});

player.addEventListener("timeupdate", progressTime);

function progressTime(){
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
  
    let mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
}

//  caption
caption.addEventListener("click", ()=>{
    player.appendChild = '<track label="English" kind="subtitles" srclang="en" src="vtt/avengers.vtt">';
});

// Audio-mute functionality
mute.addEventListener("click", ()=>{
    
    if(player.muted){
        player.muted = !player.muted;
        mute.innerHTML = '<img src="https://img.icons8.com/dotty/30/000000/high-volume.png"/>';
        console.log("if");
    }else{
        player.muted = !player.muted;
        mute.innerHTML = '<img src="https://img.icons8.com/dotty/30/000000/no-audio.png"/>';
    }
});

// Progress Bar
player.addEventListener('loadedmetadata', function() {
    progress.setAttribute('max', player.duration);
 });

player.addEventListener('timeupdate', function() {
    if (!progress.getAttribute('max')) progress.setAttribute('max', player.duration);
    progress.value = player.currentTime;
    progressBar.style.width = Math.floor((player.currentTime / player.duration) * 100) + '%';
});

// Caption/subtitle
player.textTracks[0].mode = 'hidden';
caption.querySelector("span").classList.add("line-through");
caption.addEventListener('click', ()=>{

    if(player.textTracks[0].mode == 'hidden'){
        player.textTracks[0].mode = 'showing';
        caption.querySelector("span").classList.add("line");
    }
    else{
        caption.querySelector("span").classList.remove("line");
        caption.querySelector("span").classList.add("line-through");
        player.textTracks[0].mode = 'hidden';
    }
});