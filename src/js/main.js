'use strict';

import ProductData from './productData.js';
import ProductList from './productList.js';

const TentsData = new ProductData('tents');

const ProdList = new ProductList('tents', TentsData, document.querySelector('.product-list'));
ProdList.init()
