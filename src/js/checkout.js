import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './checkoutProcess.js'

const checkout = new CheckoutProcess('so-cart');

loadHeaderFooter();

checkout.init();