document.addEventListener("DOMContentLoaded", function () {
  const CATALOGTROUSERS = [
    {
      id: 1,
      title: "Зари",
      img: "images/trousers/1.jpg",
      price: "690 рублей",
    },
    {
      id: 2,
      title: "Бест трикотаж",
      img: "images/trousers/2.jpg",
      price: "990 рублей",
    },
    {
      id: 3,
      title: "Ревели",
      img: "images/trousers/3.jpg",
      price: "890 рублей",
    },
  ];
  const CATALOGTSHIRT = [
    {
      id: 1,
      title: "Своя культура",
      img: "images/t-shirt/1.jpg",
      price: "23690 рублей",
    },
    {
      id: 2,
      title: "Инферно",
      img: "images/t-shirt/2.jpg",
      price: "3990 рублей",
    },
    {
      id: 3,
      title: "Зила",
      img: "images/t-shirt/3.jpg",
      price: "4890 рублей",
    },
  ];

  const trousersItems = document.querySelector(".product__items");
  const countTrousers = document.querySelector(
    ".sidebar__item__count--trousers"
  );
  const countTShirt = document.querySelector(".sidebar__item__count--T_shirt");

  function renderCatalog(productList = [], classItem) {
    productList.forEach(function (item) {
      const formItemHTML = ` <li class="product__item ${classItem}">
    <img
    class="product__item__img"
    src="${item.img}"
    alt="img"
    />
    <div class="product__item__bottom">
                    
    <a href="#" class="product__item__link">${item.title}</a>
    <div class="product__item__price">${item.price}</div>
    </div>
  </li>`;
      trousersItems.insertAdjacentHTML("afterbegin", formItemHTML);
    });
  }
  renderCatalog(CATALOGTROUSERS, "trousersItem");
  renderCatalog(CATALOGTSHIRT, "tshirtItem");

  document.querySelector(".search__input").oninput = function () {
    const val = this.value.trim().toLowerCase();
    const productLink = document.querySelectorAll(".product__item__link");
    const catalogItems = document.querySelector("#hidden");
    if (val !== "") {
      catalogItems.classList.remove("hidden");
      productLink.forEach(function (item) {
        const formItemTitle = item.closest(".product__item");
        if (item.innerText.toLowerCase().search(val) == -1) {
          formItemTitle.classList.add("hidden");
          countTrousers.innerHTML =
            CATALOGTROUSERS.length -
            document.querySelectorAll(".trousersItem.hidden").length;
          countTShirt.innerHTML =
            CATALOGTSHIRT.length -
            document.querySelectorAll(".tshirtItem.hidden").length;
        } else {
          formItemTitle.classList.remove("hidden");
          countTrousers.innerHTML =
            CATALOGTROUSERS.length -
            document.querySelectorAll(".trousersItem.hidden").length;
          countTShirt.innerHTML =
            CATALOGTSHIRT.length -
            document.querySelectorAll(".tshirtItem.hidden").length;
        }
      });
    } else {
      catalogItems.classList.add("hidden");
      productLink.forEach(function (item) {
        const formItemTitle = item.closest(".product__item");
        formItemTitle.classList.remove("hidden");
      });
    }
  };
});
