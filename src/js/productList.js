export default class ProductList {

  constructor(category, dataSource, targetElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.targetElement = targetElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.generateList(list);
  }

  generateList(list) {
    const template = document.getElementById("product-card-template");
    console.log(list);
    list.forEach(product => {
      const clone = template.content.cloneNode(true);
      const preparedClone = this.prepareTemplate(clone, product)
      this.targetElement.appendChild(preparedClone);
    });
  }

  prepareTemplate(clone, product) {
    clone.querySelector('a').href +=  product.Id;
    clone.querySelector('img').src = product.Image;
    clone.querySelector('img').alt += product.Name;
    clone.querySelector('.card__brand').textContent = product.Brand.Name;
    clone.querySelector('.card__name').textContent = product.NameWithoutBrand;
    clone.querySelector('.product-card__price').textContent += product.FinalPrice; 
    return clone;
  }
}
