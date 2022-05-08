import Image from '../../atoms/image/image.atom.js';
import Link from '../../atoms/link/link.atom.js';
import Text from '../../atoms/text/text.atom.js';
import Title from '../../atoms/title/title.atom.js';

class Figure {
  constructor() {
    this.init();
    this.image = new Image();
    this.link = new Link();
    this.text = new Text();
    this.title = new Title();
  }

  init() {
    console.log("figure molecule loaded")
  }
}