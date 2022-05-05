'use strict';

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error('Bad Response');
  }
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

// render data to a template
export function renderListWithTemplate(template, parentElement, list, callback) {
  list.forEach(item => {
    const clone = template.content.cloneNode(true);
    const doneTemplate = callback(clone, item);
    parentElement.appendChild(doneTemplate);
  })
}

// render data with a template
export function renderWithTemplate(template, parentElement, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) { 
    clone = callback(clone, data);
  }
  parentElement.appendChild(clone);
}

// loads a custom template at the given path
export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

// loads the header and the footer
export async function loadHeaderFooter() {
  const header = await loadTemplate('../partials/header.html');
  const headerElem = document.getElementById('main-header');
  renderWithTemplate(header, headerElem);

  const footer = await loadTemplate('../partials/footer.html');
  const footerElem = document.getElementById('main-footer');
  renderWithTemplate(footer, footerElem);
}