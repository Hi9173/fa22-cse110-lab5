// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  
  
  var hornSelect = document.getElementById('horn-select');
  var imgSource = document.querySelectorAll('img');
  var audioSource = document.querySelector('audio');
  hornSelect.addEventListener('change', (event) => {
    imgSource[0].src = 'assets/images/' + event.target.value + '.svg';
    audioSource.src = 'assets/audio/' + event.target.value + '.mp3';
  })

  var volumeSlide = document.getElementById('volume');
  volumeSlide.addEventListener('input', (event) => {
    if (event.target.value == 0) {
      imgSource[1].src = 'assets/icons/volume-level-0.svg';
    } else if (event.target.value >= 1 && event.target.value < 33) {
      imgSource[1].src = 'assets/icons/volume-level-1.svg';
    } else if (event.target.value >= 33 && event.target.value < 67) {
      imgSource[1].src = 'assets/icons/volume-level-2.svg';
    } else {
      imgSource[1].src = 'assets/icons/volume-level-3.svg';
    }
    audioSource.volume = event.target.value / 100;
  })

  var playButton = document.querySelector('button');
  playButton.addEventListener('click', function() {
    if (imgSource[0].src == 'https://hi9173.github.io/fa22-cse110-lab5/assets/images/party-horn.svg') {
      jsConfetti.addConfetti()
    }
    audioSource.play();
  })
}
