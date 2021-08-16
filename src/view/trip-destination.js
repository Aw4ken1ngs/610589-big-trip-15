import { createElement } from '../utils.js';
const createDestinationTemplate = (descriptions) => {
  const { description, pictures } = descriptions;
  return `<h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
    </div>
  </div>`;
};

export default class Destination {
  constructor(destinations) {
    this._destinations = destinations;
    this._element = null;
  }

  getTemplate() {
    return createDestinationTemplate(this._destinations);
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
