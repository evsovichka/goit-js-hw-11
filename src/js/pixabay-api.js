import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './render-functions';
import { elements } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const key = '44929551-fd3f3fb9d8ead760ff0c5783d';

export function makeRequest(params) {
  elements.loader.style.display = 'inline-block';

  fetch(
    `https://pixabay.com/api/?key=${key}&q=${params}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(({ hits }) => {
      elements.loader.style.display = 'none';
      if (hits.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      elements.imagesList.insertAdjacentHTML('afterbegin', createMarkup(hits));

      const OpenGallery = new SimpleLightbox('.js-imagesList a', {
        captions: true,
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
      });

      OpenGallery.on('show.simplelightbox', evt => {
        evt.preventDefault();
      });
      OpenGallery.refresh();
    })
    .catch(err => console.error(err));
}
