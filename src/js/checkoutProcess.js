import { getLocalStorage, qs } from './utils.js';

export default class CheckoutProcess {

  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
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
    this.tax = .06;
    
    // shipping
    if (this.list) {
      this.shipping += 8;
      this.shipping += (2 * this.list.length);
    }
    
    // calculations
    this.orderTotal = this.itemTotal + this.shipping + (this.tax * this.itemTotal);
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    qs('#summaryQuant').textContent = this.list.length;
    qs('#summarySubtotal').textContent = this.itemTotal;
    qs('#summaryShipEst').textContent = this.shipping;
    qs('#summaryTax').textContent = this.tax;
    qs('#summaryTotal').textContent = this.orderTotal;

    // debug
    // qs('#summaryQuant').textContent = 'test';
    // qs('#summarySubtotal').textContent = 'test';
    // qs('#summaryShipEst').textContent = 'test';
    // qs('#summaryTax').textContent = 'test';
    // qs('#summaryTotal').textContent = 'test';
  }
  
}