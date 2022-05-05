import { renderListWithTemplate } from './utils';

export default class ProductList {
  
  constructor(category, dataSrc, element) {
    this.category = category;
    this.element = element;
    this.dataSrc = dataSrc;
  }

  async init() {
    const data = await this.dataSrc.getData();
    this.renderList(data)
  }

  doTemplate(template, product) {
    template.querySelector('a').href += product.Id;
    template.querySelector('img').src = product.Image;
    template.querySelector('img').alt += product.Name;
    template.querySelector('.card__brand').innerHTML = product.Brand.Name;
    template.querySelector('.card__name').innerHTML = product.NameWithoutBrand;
    template.querySelector('.product-card__price').innerHTML += product.FinalPrice;
    return template
  }

  renderList(list) {
    this.element.innerHTML = '';
    shortenList(list, 4);

    const template = document.getElementById('product-card-template');
    renderListWithTemplate(template, this.element, list, this.doTemplate);
  }
}

function shortenList(list, length) {
  if (list.length > length) {
    list.length = length;
  }
  return list
}