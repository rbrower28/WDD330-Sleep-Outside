'use strict';

import ProductData from './productData.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';
import { getParam } from './utils.js'

loadHeaderFooter();

const category = getParam('category');

const prodData = new ProductData();
const listElement = document.querySelector('.product-list');
const prodList = new ProductList(category, prodData, listElement);
  
prodList.init();