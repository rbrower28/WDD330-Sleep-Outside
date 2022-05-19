import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

class Admin {
  constructor() {}

  login() {
    console.log("You logged in!");
  }

  getLoginFormElement() {
    return document.querySelector("#login-form");
  }

  renderLoginForm() {
    return `
      <form>
          <fieldset>
              <legend>Please Log In</legend>
              <label>Email:<input type="email" name="userEmail"></label><br><br>
              <label>Password:<input type="password" name="userPassword"></label><br><br>
              <button type="submit" id="login-button">Login</button>
          </fieldset>
      </form>
      `;
  }

  injectLoginForm() {
    let loginForm = this.getLoginFormElement();
    loginForm.innerHTML = this.renderLoginForm();
  }
}

{
  let admin = new Admin();
  admin.injectLoginForm();

  document.querySelector("#login-button").addEventListener("click", console.log("You logged in!"));
}
