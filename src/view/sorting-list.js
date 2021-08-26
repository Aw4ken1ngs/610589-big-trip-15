import AbstractView from './abstract.js';
const createSortingListTemplate = () => '<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>';

export default class SortingList extends AbstractView {

  getTemplate() {
    return createSortingListTemplate();
  }
}

