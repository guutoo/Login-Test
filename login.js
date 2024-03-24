const moveButton = document.getElementsByClassName('cadastro1')[0];
const container = document.getElementsByClassName('cadastro')[0];
const loginButton = document.getElementById('login-button');
const originalTop = window.getComputedStyle(container).top || '0px';

moveButton.addEventListener('click', () => {
  container.classList.toggle('moved');

  if (container.classList.contains('moved')) {
    container.style.top = '-457px';
  }
});

loginButton.addEventListener('click', () => {
  container.style.top = originalTop;
});