const custom = document.querySelector('.custom-controls'),
      button = custom.querySelectorAll('img'),
      audio = document.querySelector('.innerContent audio');


// Audio Player
function audioPlayer(){
    let pause = false;
  if(this.dataset.button == 2)
  {
    audio.currentTime = 0;
    audio.pause();
  }

  else if(this.dataset.button == 3)
  {
    audio.currentTime = 0;
    audio.play();
  }

  else if(this.dataset.button == 1)
  {
    audio.pause();
  }

  else {
    audio.play();
  }
}

button.forEach(data=>data.addEventListener("click",audioPlayer));