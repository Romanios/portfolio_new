function exampleMobile() {
const tabHeaders = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");
let activeTab = null; // отслеживает активный таб

tabHeaders.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const targetId = this.dataset.tab;
    const contentBox = document.querySelector("#" + targetId);

    // Если повторный клик по уже активной вкладке — скрываем контент
    if (activeTab === targetId) {
      contentBox.classList.add("tab-content-hidden");
      activeTab = null;
      tab.classList.remove("pressed"); // если используешь класс pressed
      return;
    }

    // Скрываем все контент-боксы
    contentBoxes.forEach(function (box) {
      box.classList.add("tab-content-hidden");
    });

    // Показываем нужный
    contentBox.classList.remove("tab-content-hidden");

    // Обновляем активный таб
    activeTab = targetId;

    // Класс нажатия для кнопок (если нужно)
    tabHeaders.forEach(function (t) {
      t.classList.remove("pressed");
    });
    tab.classList.add("pressed");
  });
});
}
export default exampleMobile;
