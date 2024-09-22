import { waitForElement } from "../../utils/wait-for-element-dom";

document.addEventListener("DOMContentLoaded", () => {
  waitForElement(".progress-bar__fill").then(() => {
    const containerCard = document.querySelector('.card__container') as HTMLElement | null;
    const illustrations = document.querySelectorAll('.card__illustration');

    if (!containerCard || illustrations.length === 0) return;

    setTimeout(() => {
      containerCard.classList.add('visible'); 
      containerCard.style.opacity = '1'; 
    }, 3000);
    

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      illustrations.forEach((img) => {
        const imgTop = (img as HTMLElement).getBoundingClientRect().top;

        if (imgTop < windowHeight - 100) {
          (img as HTMLElement).classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
});
