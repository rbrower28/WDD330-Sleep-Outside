import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './checkoutProcess.js'
import { alertMessage } from './utils.js';

loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart');

myCheckout.init();

document
  .querySelector('#zip')
  .addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  var checkoutForm = document.getElementById('checkoutForm');
  var status = checkoutForm.checkValidity();
  checkoutForm.checkValidity();
  if (status) {
    myCheckout.checkout();
    alert('Success!');
  } else {
    alertMessage('please fill out the form correctly :/');
  }
});

