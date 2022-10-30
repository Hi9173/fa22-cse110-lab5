// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
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
    }
  })
}