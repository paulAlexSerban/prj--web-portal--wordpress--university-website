import Image from '../../../../../../landing/ux-ui/components/atoms/image/image.atom.js';
import Link from '../../../../../../landing/ux-ui/components/atoms/link/link.atom.js';
import Text from '../../../../../../landing/ux-ui/components/atoms/text/text.atom.js';
import Title from '../../../../../../landing/ux-ui/components/atoms/title/title.atom.js';

export default class Card {
  constructor() {
    this.init();
    this.image = new Image();
    this.link = new Link();
    this.text = new Text();
    this.title = new Title();
  }

  init() {
    console.log("card molecule loaded")
  }
}