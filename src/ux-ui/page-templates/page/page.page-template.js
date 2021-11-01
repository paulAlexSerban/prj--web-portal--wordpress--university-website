import './page.page-template.scss';

import GenericTemplate from '../../templates/generic/generic.template';

class PagePage {
  constructor() {
    this.pageParams = {
      pageTitle: 'page',
    };
    this.GENERIC_PAGE = new GenericTemplate(this.pageParams);
    this.init();
  }

  init() {
    console.log('page template loaded');
  }
}

const PAGE_PAGE = new PagePage();
