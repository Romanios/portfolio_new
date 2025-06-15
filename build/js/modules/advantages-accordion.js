function advantadesAccordion() {
  const headersAccordion = document.querySelectorAll(
    '[data-name="accordion-title"]'
  );

  headersAccordion.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("arrow-top");
      this.nextElementSibling.classList.toggle("hidden");
    });
  });
}

export default advantadesAccordion;