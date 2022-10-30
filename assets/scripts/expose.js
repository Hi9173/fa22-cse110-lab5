// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById('horn-select');
  var imgSource = document.querySelectorAll('img');
  hornSelect.addEventListener('change', function() {
    imgSource[0]='/assets/images/car-horn.svg';
    console.log(imgSource[0]);
  })
}