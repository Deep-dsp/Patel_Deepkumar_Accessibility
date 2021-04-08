const button = document.querySelectorAll('.show-controls button'),
    showplayer = document.querySelector('.zoo');

const playPauseBtn = document.querySelector('.playpausez'),
      caption = document.querySelector('.captionz'),
      mute = document.querySelector('#mutez');

function videocontrols(){

    //play-pause
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

    // Stop Button
    else if(this.dataset.media == 7){
        showplayer.pause();
        showplayer.currentTime = 0;
        playPauseBtn.innerHTML = '<i class="play circle icon"></i>';
    }

    // rewind
    else if(this.dataset.media == 8){
        showplayer.currentTime -= 3;
    }

    // forward
    else if(this.dataset.media == 9){
        showplayer.currentTime += 3;
        if(showplayer.currentTime >= showplayer.duration || showplayer.paused) {
            showplayer.pause();
            showplayer.currentTime = 0;
            playPauseBtn.innerHTML = '<i class="play circle icon"></i>';
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

    // Volume
    else if(this.dataset.media == 11){
        if(showplayer.muted){
            showplayer.muted = !showplayer.muted;
            mute.innerHTML = '<i class="volume up icon"></i>';
        }else{
            showplayer.muted = !showplayer.muted;
            mute.innerHTML = '<i class="volume off icon"></i>';
        }
    }
}
showplayer.textTracks[0].mode = 'hidden';
button.forEach(show=>show.addEventListener("click", videocontrols));