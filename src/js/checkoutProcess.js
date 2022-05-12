import { getLocalStorage, qs } from './utils.js';
import ExternalServices from './externalServices.js'

const services = new ExternalServices();
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class CheckoutProcess {

  constructor(key) {
    this.key = key;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }

  calculateItemSummary() {
    
    let totals = this.list.map((item) => item.FinalPrice)
    this.itemTotal = totals.reduce(function (a, b) {
      return a + b;
    }, 0);

    this.calculateOrdertotal();
  }
  
  calculateOrdertotal() {
    // tax
    this.tax = .06 * this.itemTotal;
    
    // shipping
    if (this.list) {
      this.shipping += 8;
      this.shipping += (2 * this.list.length);
    }
    
    // calculations
    this.orderTotal = (this.itemTotal + this.shipping + this.tax).toFixed(2);
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    qs('#summaryQuant').textContent = this.list.length;
    qs('#summarySubtotal').textContent = '$' + this.itemTotal;
    qs('#summaryShipEst').textContent = '$' + this.shipping.toFixed(2);
    qs('#summaryTax').textContent = '$' + this.tax.toFixed(2);
    qs('#summaryTotal').textContent = '$' + this.orderTotal;

    // debug
    // qs('#summaryQuant').textContent = 'test';
    // qs('#summarySubtotal').textContent = 'test';
    // qs('#summaryShipEst').textContent = 'test';
    // qs('#summaryTax').textContent = 'test';
    // qs('#summaryTotal').textContent = 'test';
  }

  async checkout() {
    const formElement = document.forms['checkout'];

    const json = formDataToJSON(formElement);
    // add totals, and item details
    json.orderDate = new Date();
    json.orderTotal = this.orderTotal;
    json.tax = this.tax;
    json.shipping = this.shipping;
    json.items = packageItems(this.list);
    console.log(json);
    try {
      const res = await services.checkout(json);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  
}