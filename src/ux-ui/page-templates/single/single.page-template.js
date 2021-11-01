import './single.page-template.scss';

import GenericTemplate from '../../templates/generic/generic.template';

class SinglePage {
  constructor() {
    this.pageParams = {
      pageTitle: 'single',
    };
    this.GENERIC_PAGE = new GenericTemplate(this.pageParams);
    this.init();
  }

  init() {
    console.log('single template loaded');
  }
}

const SINGLE_PAGE = new SinglePage();
