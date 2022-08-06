const menuToggle = document.querySelector('.menuToggle');
const menuLists = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  menuLists.classList.toggle('active');
});
