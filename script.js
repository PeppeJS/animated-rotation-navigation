let container = document.querySelector('.container');
let opens = document.getElementById('open');
let closes = document.getElementById('close');

opens.addEventListener('click', () => {
  container.classList.add('show-nav');
});

closes.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
