function counter() {
  function animateCounter(el, target) {
  let current = 0;
  const speed = 100; // чем меньше, тем быстрее
  const increment = target / speed;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      el.textContent = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = target;
    }
  };

  updateCounter();
}

// Observer
const counters = document.querySelectorAll('.counter');
let started = false;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        animateCounter(counter, target);
      });
      started = true;
    }
  });
}, {
  threshold: 0.5
});

observer.observe(document.querySelector('.stats-section'));

}


export default counter;