'use strict';

import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/forms';
import changeModalState from './modules/modalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  let deadline = '2020-04-01';

  changeModalState(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  form(modalState);
  timer('.container1', deadline);
});