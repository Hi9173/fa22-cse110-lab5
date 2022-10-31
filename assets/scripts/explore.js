// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var inputTxt = document.querySelector('#text-to-speak');
  var voiceSelect = document.querySelector('select');
  var voices = [];
  var img = document.querySelector('img');

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var button = document.querySelector('button');
  button.addEventListener('click', function() {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    img.src = 'assets/images/smiling-open.png';

    utterThis.addEventListener('end', function() {
      img.src = 'assets/images/smiling.png';
    })
  })
}