import ExternalServices from './externalServices.js';
import { loadHeaderFooter } from "../js/utils.js";

loadHeaderFooter();

export default class Admin {
  constructor(outputSelector) {
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }

  async login(creds, next) {
    try {
      this.token = await this.services.loginRequest(creds);
      next();
    }
    catch(err) {
      console.log(err);
    }
  }

  showLogin() {
    this.mainElement.innerHTML = `<fieldset class="login-form">
    <legend>Login</legend>
    <p>
      <label for="email">Email</label>
      <input type="text" placeholder="email" id="email" value="user1@email.com"/>
    </p>
    <p>
      <label for="password">Password</label>
      <input type="password" placeholder="password" id="password" />
    </p>
    <button type="submit" id="loginButton">Login</button>
    </fieldset>`;

    document.querySelector('#loginButton').addEventListener('click', (e) => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      this.login({email, password}, this.showOrders.bind(this));
    });
  }

  async showOrders() {
    try {
      const orders = await this.services.getOrders(this.token);
      this.mainElement.innerHTML = `<h2>Current Orders</h2>
      <table id="orders">
      <thead>
      <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
      </thead>
      <tbody class="order-body"></tbody>
      </table>`;
      const parent = document.querySelector('#orders tbody');
      parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join('');
    } catch(err) {
      console.log(err);
    }
  }
}

const myAdmin = new Admin("main");
myAdmin.showLogin();