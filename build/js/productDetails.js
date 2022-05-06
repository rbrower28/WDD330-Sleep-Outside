var s=(a,t,d)=>new Promise((e,c)=>{var u=r=>{try{o(d.next(r))}catch(i){c(i)}},p=r=>{try{o(d.throw(r))}catch(i){c(i)}},o=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,p);o((d=d.apply(a,t)).next())});import{setLocalStorage as l,getLocalStorage as n,loadHeaderFooter as h}from"./utils.js";h();export default class m{constructor(t,d){this.productId=t,this.product={},this.dataSource=d}init(){return s(this,null,function*(){this.product=yield this.dataSource.findProductByID(this.productId),console.log(this.product),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let t=n("so-cart");t||(t=[]),t.push(this.product),l("so-cart",t)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`}}
