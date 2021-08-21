import { createElement } from '../utils.js';
const createSortingListTemplate = () => '<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>';

export default class SortingList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
