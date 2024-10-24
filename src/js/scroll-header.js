const header = document.querySelector('.page-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});
