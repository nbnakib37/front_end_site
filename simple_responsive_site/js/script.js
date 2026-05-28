const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = navLinks.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
