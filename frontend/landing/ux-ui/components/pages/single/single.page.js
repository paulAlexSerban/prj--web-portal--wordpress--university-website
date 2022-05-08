import './single.page.scss';

import GenericTemplate from '../../templates/generic/generic.template';

class SinglePage {
  constructor(page) {
    this.pageParams = {
      pageNode: page,
      pageTitle: page.dataset.jsPage,
    };

    this.init();
  }

  setupTemplate() {
    this.GENERIC_TEMPLATE = new GenericTemplate(this.pageParams);
  }

  init() {
    this.setupTemplate();
  }
}

document.querySelectorAll('[data-js-page="single-page"]').forEach((page) => new SinglePage(page));
