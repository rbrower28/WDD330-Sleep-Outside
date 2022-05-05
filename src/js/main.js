'use strict';

import ProductData from './productData.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();

const tentsData   = new ProductData('tents');
const listElement = document.querySelector('.product-list');
const prodList = new ProductList('tents', tentsData, listElement);
  
prodList.init();
