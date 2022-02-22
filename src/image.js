/* eslint-disable no-plusplus */
import { $ } from './utils/utils.js';

const initImage = () => {
  function setImageSlide(selector) {
    const $selector = $(selector);
    const slideAll = $selector.querySelectorAll('ul.image-small__inner > li');
    const numSlide = slideAll.length;
    const PrevBtn = $selector.querySelector('.control > button.prev');
    const NextBtn = $selector.querySelector('.control > button.next');

    function showSlide(n) {
      const slideNow = n;
      const slidePrev = n === 1 ? numSlide : n - 1;
      const slideNext = n === numSlide ? 1 : n + 1;

      for (let i = 0; i < numSlide; i++) {
        slideAll[i].style.display = 'block';
      }
      slideAll[n - 1].style.display = 'none';
      PrevBtn.addEventListener('click', () => {
        showSlide(slidePrev);
      });
      NextBtn.addEventListener('click', () => {
        showSlide(slideNext);
      });
      document.getElementById('image-change-big').src = slideAll[n - 1].querySelector('a.image-small > img').src;
      document.getElementById('image-big').href = slideAll[n - 1].querySelector('a.image-small').href;

      if (slideNow === 3) {
        slideAll[1].classList.add('top-bar');
      } else {
        slideAll[1].classList.remove('top-bar');
      }
    }
    showSlide(1);
  }
  setImageSlide('#image');
};

export default initImage;
