import Glide from '@glidejs/glide';

class HeroSlider {
  constructor(el, pageParams, templateParams) {
    this.el = el;
    this.pageParams = pageParams;
    this.templateParams = templateParams;
    this.init();
    console.log('heroslider');
  }

  /**
   * 1. count how many slides there are
   * 2. Generate the HTML for the navigation dots
   * 3. Add the dots HTML to the DOM
   * 4. Actually initialize the glide / slider script
   */

  setupGlide() {
    if (!this.heroSlier) {
      this.dotCount = this.slides.length; /* 1 */
      this.dotHTML = ''; /* 2 */

      for (let i = 0; i < this.dotCount; i += 1) {
        this.dotHTML += `<button class='slider__bullet glide__bullet' data-glide-dir='=${i}'></button>`;
      }

      this.glideBullets.insertAdjacentHTML('beforeend', this.dotHTML); /* 3 */

      /* 4 */
      this.glide = new Glide('.hero-slider', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000,
      });

      this.glide.mount();
    }
  }

  setupDOMReferences() {
    this.heroSlier = !document.querySelector('.hero-slider');
    this.slides = this.el.querySelectorAll('.hero-slider__slide');
    this.glideBullets = this.el.querySelector('.glide__bullets');
  }

  init() {
    this.setupDOMReferences();
    this.setupGlide();
  }
}

export default HeroSlider;
