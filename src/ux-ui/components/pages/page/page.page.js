import './page.page.scss';

import GenericTemplate from '../../templates/generic/generic.template';

class PagePage {
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

document.querySelectorAll('[data-js-page="page"]').forEach((page) => new PagePage(page));
