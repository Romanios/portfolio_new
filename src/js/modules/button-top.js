function buttonTop() {
  const scrollBtn = document.getElementById('scrollToTop');

// Показать кнопку, если прокрутили вниз больше чем на 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// Плавная прокрутка наверх при клике
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

}



export default buttonTop;
