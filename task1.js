document.addEventListener("DOMContentLoaded", function () {
  const inputPhone = document.querySelector(".form__input__phone");
  const btn = document.querySelector(".form__input__btn");

  const mask = new IMask(inputPhone, { mask: "+{7}(000)000-00-00" });

  inputPhone.addEventListener("input", inputPhoneHandler);
  function inputPhoneHandler() {
    if (mask.masked.isComplete) {
      btn.classList.add("form__input__btn--active");
    } else {
      btn.classList.remove("form__input__btn--active");
    }
  }

  btn.addEventListener("click", btnHandler);
  function btnHandler(event) {
    event.preventDefault();
    console.log(mask.masked.unmaskedValue);
    //   fetch('https://182.211.12.12', {body: phone: mask.masked.unmaskedValue })
  }
});
