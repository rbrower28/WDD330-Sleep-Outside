import{loadHeaderFooter as t}from"./utils.js";t();function c(a){return JSON.parse(localStorage.getItem(a))}function e(){const a=c("so-cart");document.querySelector(".product-list").innerHTML=o(a)}function o(a){const r=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Image}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`;return r}e();
