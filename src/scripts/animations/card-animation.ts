import { waitForElement } from "../../utils/wait-for-element-dom";

document.addEventListener("DOMContentLoaded", () => {
  waitForElement(".progress-bar__fill").then(() => {
    const containerCard = document.querySelector('.card__container');
    const illustrations = document.querySelectorAll('.card__illustration');

    if(!containerCard || !illustrations) throw new Error('Card container or illustrations not found');

    setTimeout(() => {
      containerCard.classList.add('visible');
    }, 3000);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      illustrations.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < windowHeight - 100) {
          img.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
});
