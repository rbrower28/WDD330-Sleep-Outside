import { calculateTotal, getLocalStorage } from "./cart.js";


export default class CheckoutProcess {
  constructor(tax, firstItemShipping, extraItemShipping) {
    // in case we want different tax, shipping, and extra item shipping rates
    this.tax = tax;
    // shipping for first item is $10 in directions
    this.firstItemShipping = firstItemShipping;
    // shipping for extra items beyond first is $2 each
    this.extraItemShipping = extraItemShipping;

    this.numberOfItems = getNumberOfItems(getLocalStorage("so-cart"));

    this.itemSubtotal = calculateTotal(getLocalStorage("so-cart"));
    this.shippingEstimate = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }


  getNumberOfItems(array) {


  }

  testArray = [1, 2, 3]

  getNumberOfItems(testArray);

  calculateShipping() {}

  calculateOrderTotals() {}

  displayOrderTotals() {}
}
