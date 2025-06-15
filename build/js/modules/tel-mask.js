
function InputMask() {
  document.addEventListener("DOMContentLoaded", function () {
  let inputTel = document.querySelector('input[type="tel"]');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(inputTel);
});
}
export default InputMask;