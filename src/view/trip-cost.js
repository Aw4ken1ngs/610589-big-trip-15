import AbstractView from './abstract.js';

const createTripCostTemplate = (tripCost) => {
  const { price } = tripCost;
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
  </p>`;
};

export default class TripCost extends AbstractView {
  constructor(tripCost) {
    super();
    this._tripCost = tripCost;
  }

  getTemplate() {
    return createTripCostTemplate(this._tripCost);
  }
}
