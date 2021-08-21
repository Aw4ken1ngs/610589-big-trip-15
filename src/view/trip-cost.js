import { createElement } from '../utils.js';
const createTripCostTemplate = (tripCost) => {
  const { price } = tripCost;
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
  </p>`;
};

export default class TripCost {
  constructor(tripCost) {
    this._tripCost = tripCost;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._tripCost);
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
