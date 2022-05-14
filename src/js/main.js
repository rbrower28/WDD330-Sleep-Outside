'use strict';

import ExternalServices from './externalServices.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();

const tentsData = new ExternalServices('tents');
const listElement = document.querySelector('.product-list');
const prodList = new ProductList('tents', tentsData, listElement);
  
prodList.init();
