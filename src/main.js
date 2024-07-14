import { makeRequest } from './js/pixabay-api';
// import { createMarkup } from './js/render-functions';

export const elements = {
  form: document.querySelector('.js-searchForm'),
  serchInput: document.querySelector('.js-searchInput'),
  searchBtn: document.querySelector('.js-searchBtn'),
  imagesList: document.querySelector('.js-imagesList'),
  loader: document.querySelector('.loader'),
};

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  elements.imagesList.innerHTML = '';
  if (elements.serchInput.value.trim() === '') {
    return;
  }
  makeRequest(elements.serchInput.value.trim().toLowerCase());
}
