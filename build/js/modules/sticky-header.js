function stickyHeader() {
      const header = document.getElementById('stickyHeader');

    // Порог для повторного появления хедера
    const reappearScrollY = 1000;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      // Если прокрутили вниз от самого верха — скрыть
      if (currentScroll > 20 && currentScroll < reappearScrollY) {
        header.classList.add('hidden');
      }

      // Если прокрутили достаточно далеко — снова показать
      if (currentScroll >= reappearScrollY) {
        header.classList.remove('hidden');
        header.classList.add('visible');
      }

      // Если вернулись к началу — показать хедер
      if (currentScroll <= 20) {
        header.classList.remove('hidden');
        header.classList.remove('visible');
      }

      lastScrollY = currentScroll;
    });

}

export default stickyHeader;