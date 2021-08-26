import AbstractView from './abstract.js';

const createDestinationTemplate = (descriptions) => {
  const { pictures } = descriptions;
  return `<div class="event__photos-container">
    <div class="event__photos-tape">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
    </div>
  </div>`;
};

export default class Destination extends AbstractView {
  constructor(destinations) {
    super();
    this._destinations = destinations;
  }

  getTemplate() {
    return createDestinationTemplate(this._destinations);
  }
}
