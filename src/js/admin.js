import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();


class Admin{

    constructor(){

    }

    login() {

    }

    getLoginFormElement(){
        return document.querySelector('#login-form');
    }

    showLoginForm(){
        loginForm = this.getLoginFormElement();

    }

}

showLoginForm();