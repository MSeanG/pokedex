const carousel = () => {
  let index = 1;

  const 
    slides = document.querySelectorAll('.slide'),
    dotnav = document.querySelector('.dotnav'),
  
    handleDots = () => {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' current', '');
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          currentSlide(i + 1);
        })
      })
      dots[index-1].className += ' current';
      
    },

    showSlide = (n) => {
      let markup = '';

      if (n > slides.length) {index = 1}
      if (n < 1) {index = slides.length}

      slides.forEach((slide, i) => {
        slide.style.display = 'none';
        markup += /*html*/`
          <span class="dot"></span>
        `;
      });

      slides[index-1].style.display = "block";
      dotnav.innerHTML = markup;
      handleDots();
    },

    newSlide = (n) => {showSlide(index += n)},
    currentSlide = (n) => {showSlide(index = n)}
  ;

  showSlide(index);
  document.querySelector('.button-prev').addEventListener('click', () => {
    newSlide(-1);
  });
  document.querySelector('.button-next').addEventListener('click', () => {
    newSlide(1);
  });

  

};

export default carousel;