import calcScroll from './calcScroll';

const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img'),
    scroll = calcScroll();

  imgPopup.classList.add('popup_img');
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  bigImage.style.cssText = `
    max-width: 80%;
    max-height: 80%;
    border: 2px solid #0089cd;
    border-radius: 15px;
  `;
  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentElement.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    }

    if (target && target.matches('div.popup_img')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }
  });
};

export default images;
