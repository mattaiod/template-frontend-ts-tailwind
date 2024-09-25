const modal = document.getElementById('modal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}
span.onclick = function() {
  modal.style.display = 'none';
}