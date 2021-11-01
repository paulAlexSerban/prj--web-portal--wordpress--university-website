import './index.page-template.scss';
import GenericTemplate from '../../templates/generic/generic.template';

class IndexPage {
  constructor() {
    this.pageParams = {
      pageTitle: 'index',
    };
    this.GENERIC_PAGE = new GenericTemplate(this.pageParams);
    this.init();
  }

  init() {
    console.log('index template loaded');
  }
}

const INDEX_PAGE = new IndexPage();
