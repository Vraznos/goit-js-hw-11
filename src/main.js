import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';
import { displayImages, clearImages } from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const loader = document.getElementById('loader');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const query = searchInput.value.trim();

    clearImages();

    if (query === '') {
      iziToast.error({
        title: 'Error',
        message: 'Search query cannot be empty!',
      });
      return;
    }

    loader.style.display = 'block';

    try {
      const images = await searchImages(query);
      if (images.length === 0) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
        });
      } else {
        displayImages(images);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    } finally {
      loader.style.display = 'none';
    }
  });
});
