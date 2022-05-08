import './archive-campus.page.scss';

import GenericTemplate from '../../templates/generic/generic.template';

class ArchiveCampusPage {
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
    console.log(this.pageParams);
  }
}

document.querySelectorAll('[data-js-page="archive-campus-page"]').forEach((page) => new ArchiveCampusPage(page));
console.log(document.querySelectorAll('[data-js-page="archive-campus-page"]'));
