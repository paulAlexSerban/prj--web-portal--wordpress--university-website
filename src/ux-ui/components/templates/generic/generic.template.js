import MobileMenu from '../../organisms/mobileMenu/mobileMenu.organism';
import HeroSlider from '../../organisms/heroSlider/heroSlider.organism';
import GMap from '../../organisms/googleMap/GoogleMap.organism';
import Search from '../../organisms/search/search.organism';

export default class GenericTemplate {
  constructor(pageParams) {
    this.pageParams = pageParams;
    this.templateParams = {
      templateName: 'generic',
    };

    this.init();
  }

  setupOrganisms() {
    document.querySelectorAll('[data-js-component="mobile-menu"').forEach((el) => {
      this.MOBILE_MENU = new MobileMenu(el, this.pageParams, this.templateParams);
    });

    document.querySelectorAll('[data-js-component="hero-slider"]').forEach((el) => {
      this.HERO_SLIDER = new HeroSlider(el, this.pageParams, this.templateParams);
    });

    document.querySelectorAll('[data-js-component="google-map"]').forEach(() => {
      this.GOOGLE_MAP = new GMap();
    });

    document.querySelectorAll('[data-js-component="search"]').forEach((el) => {
      this.SEARCH = new Search(el, this.pageParams, this.templatePar);
    });
  }

  init() {
    this.setupOrganisms();
  }
}
