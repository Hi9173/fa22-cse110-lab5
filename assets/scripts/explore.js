// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector('button');
  const img = document.querySelector('img');
  button.addEventListener('click', function() {
    const input = document.getElementById('text-to-speak');
    const utterThis = new SpeechSynthesisUtterance(input.value);
    img.src = 'assets/images/smiling-open.png';
    speechSynthesis.speak(utterThis);
    img.src = 'assets/images/smiling.png';
  })

}