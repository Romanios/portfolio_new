function advantadesAccordion() {
  const headersAccordion = document.querySelectorAll('[data-name="accordion-title"]');

  headersAccordion.forEach(function (item) {
    item.addEventListener("click", function () {
      // Закрываем все остальные
      headersAccordion.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("arrow-top");
          otherItem.nextElementSibling.classList.add("hidden");
        }
      });

      // Переключаем текущий
      this.classList.toggle("arrow-top");
      this.nextElementSibling.classList.toggle("hidden");
    });
  });
}

export default advantadesAccordion;