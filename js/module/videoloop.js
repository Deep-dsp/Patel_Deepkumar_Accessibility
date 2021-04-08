const button = document.querySelectorAll('.show-controls button'),
    showplayer = document.querySelector('.zoo');

const playPauseBtn = document.querySelector('.playpausez'),
      caption = document.querySelector('.captionz');

function videocontrols(){
    
    if(this.dataset.media == 6){
        if(showplayer.paused) {
            showplayer.load();
            showplayer.play();
            playPauseBtn.innerHTML = '<i class="pause circle icon"></i>';
            // playPauseBtn.textContent = 'Pause';
          } else {
            showplayer.pause();
            playPauseBtn.innerHTML = '<i class="play circle icon"></i>';
            // playPauseBtn.textContent = 'Play';
        }
    }

    // captions
    else if(this.dataset.media == 10){
        if(showplayer.textTracks[0].mode == 'hidden'){
            showplayer.textTracks[0].mode = 'showing';
            caption.innerHTML = '<i class="closed captioning icon"></i>';
        }
        else{
            // caption.querySelector(".closed").classList.remove("line");
            // caption.querySelector(".closed").classList.add("line-through");
            showplayer.textTracks[0].mode = 'hidden';
            caption.innerHTML = '<i class="closed captioning outline icon"></i>';
        }
    }
}
showplayer.textTracks[0].mode = 'hidden';
button.forEach(show=>show.addEventListener("click", videocontrols));