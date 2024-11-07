const toggleButton = document.getElementById('navbar-toggles');
const navLinks = document.getElementById('nav-linkss');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
window.onload = function() {
  document.getElementById('products').scrollIntoView();
};