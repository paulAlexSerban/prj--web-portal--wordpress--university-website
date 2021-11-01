import MobileMenu from "../../components/organisms/mobileMenu/mobileMenu.organism";
import HeroSlider from "../../components/organisms/heroSlider/heroSlider.organism";
export default class GenericTemplate {
  constructor(pageParams) {
    this.pageParams = pageParams;
    this.templateParams = {
      templateName: 'generic'
    };

    this.MOBILE_MENU = new MobileMenu(this.pageParams, this.templateParams);
    this.HERO_SLIDER= new HeroSlider(this.pageParams, this.templateParams);
    this.init();
  }

  init() {
    console.log('generic template loaded', this.pageParams);
  }
}