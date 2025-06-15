function exampleMobile() {
  const tabHeaders = document.querySelectorAll("[data-tab]");
  const contentBoxes = document.querySelectorAll("[data-tab-content]");

  tabHeaders.forEach(function (item) {
    item.addEventListener("click", function () {
      contentBoxes.forEach(function (item) {
        item.classList.add("tab-content-hidden");
      });

      const contentBox = document.querySelector("#" + this.dataset.tab);
      contentBox.classList.remove("tab-content-hidden");
    });
  });

  const items = document.querySelectorAll(".example__btn");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    item.addEventListener("click", () => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.remove("pressed");
      }

      item.classList.add("pressed");
    });
  }
}

export default exampleMobile;
