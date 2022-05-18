'use strict';

import ExternalServices from './externalServices.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';
import { getParam } from './utils.js'

loadHeaderFooter();

const category = getParam('category');

const prodData = new ExternalServices();
const listElement = document.querySelector('.product-list');
const prodList = new ProductList(category, prodData, listElement);
  
prodList.init();