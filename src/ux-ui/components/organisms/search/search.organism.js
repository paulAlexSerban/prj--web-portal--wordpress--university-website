import { getJSON } from './searchUtils';
import { spinnerLoader, searchResults } from './htmlTemplates';

class Search {
  constructor(el) {
    this.el = el;
    this.isOverlayOpen = false;
    this.typingTimer = '';
    this.isSpinnerVisible = false;
    this.previousValue = '';
    this.universityData = window.globalThis.universityData;
    this.init();
  }

  setupDOMReferences() {
    this.searchOverlay = document.querySelector('.search-overlay');
    this.openSearchTriggers = document.querySelectorAll('.js-search-trigger');
    this.closeButton = document.querySelector('.search-overlay__close');
    this.searchTerm = document.querySelector('.search-term');
    this.searchResultsContainer = document.querySelector('#search-overlay__results');
  }

  setupEventListeners() {
    this.openSearchTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => this.openOverlay(e));
    });
    this.closeButton.addEventListener('click', (e) => this.closeOverlay(e));
    document.addEventListener('keydown', (e) => this.keyPressDispatcher(e));
    this.searchTerm.addEventListener('keyup', (e) => {
      this.typingLogic(e);
    });
  }

  openOverlay() {
    this.searchOverlay.classList.add('search-overlay--active');
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.classList.remove('search-overlay--active');
    this.isOverlayOpen = false;
  }

  keyPressDispatcher(e) {
    if (
      e.keyCode === 83
      && !this.isOverlayOpen
      && !(document.querySelectorAll('input:focus').length > 0)
      && !(document.querySelectorAll('textarea:focus').length > 0)) {
      this.openOverlay();
    } else if (e.keyCode === 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }

  typingLogic(e) {
    this.event = e;

    if (this.searchTerm.value !== this.previousValue) {
      clearTimeout(this.typingTimer);

      if (this.searchTerm.value) {
        if (!this.isSpinnerVisible) {
          this.searchResultsContainer.innerHTML = spinnerLoader();
          this.isSpinnerVisible = true;
        }
        this.typingTimer = setTimeout(() => {
          this.getResults();
        }, 1500);
      } else {
        this.searchResultsContainer.innerHTML = '';
        this.isSpinnerVisible = false;
      }
    }

    this.previousValue = this.searchTerm.value;
  }

  async getResults() {
    const resultJSON = await getJSON(`${this.universityData.rootUrl}/wp-json/wp/v2/posts`, {
      search: this.searchTerm.value,
    });
    this.isSpinnerVisible = false;
    this.searchResultsContainer.innerHTML = searchResults(resultJSON);
  }

  init() {
    this.setupDOMReferences();
    this.setupEventListeners();
  }
}

export default Search;
