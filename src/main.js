import SiteMenuView from './view/site-menu.js';
import TripInfoView from './view/trip-info.js';
import TripCostView from './view/trip-cost.js';
import FiltersView from './view/filters.js';
import SortingView from './view/sorting.js';
import ListView from './view/trip-list.js';
import EditFormView from './view/edit-form.js';
import DestinationView from './view/trip-destination.js';
import ElementListView from './view/trip-element.js';
import { generateTrip } from './mock/trip.js';
import { render, RenderPosition } from './utils.js';
import SortingListView from './view/sorting-list.js';
import flatpickr from 'flatpickr';

const DESTINATIONS_COUNT = 15;

const trips = new Array(DESTINATIONS_COUNT).fill().map(generateTrip);

const siteMainElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteMainElement.querySelector('.trip-controls__filters');

const renderTrip = (tripListElement, trip) => {
  const tripComponent = new ElementListView(trip);
  const tripEditComponent = new EditFormView(trip);

  const replaceCardToForm = () => {
    tripListElement.replaceChild(tripEditComponent.getElement(), tripComponent.getElement());
  };

  const replaceFormToCard = () => {
    tripListElement.replaceChild(tripComponent.getElement(), tripEditComponent.getElement());
  };

  tripComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceCardToForm();
  });
  tripEditComponent.getElement().querySelector('.event__header').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(tripListElement, tripComponent.getElement(), RenderPosition.BEFOREEND);
};

render(siteHeaderElement, new SiteMenuView(trips[0]).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new TripInfoView(trips[0]).getElement(), RenderPosition.AFTERBEGIN);
render(siteFiltersElement, new FiltersView(trips[0]).getElement(), RenderPosition.BEFOREEND);

const siteCostElement = siteMainElement.querySelector('.trip-info');

render(siteCostElement, new TripCostView(trips[0]).getElement(), RenderPosition.BEFOREEND);

const siteMainContentElement = document.querySelector('.trip-events');

const SortingListComponent = new SortingListView();
render(siteMainContentElement, SortingListComponent.getElement(), RenderPosition.AFTERBEGIN);
render(SortingListComponent.getElement(), new SortingView(trips[0]).getElement(), RenderPosition.BEFOREEND);
render(siteMainContentElement, new ListView(trips[0]).getElement(), RenderPosition.BEFOREEND);

const siteCreateEditFormElement = siteMainContentElement.querySelector('.trip-events__item');

render(siteCreateEditFormElement, new EditFormView(trips[0]).getElement(), RenderPosition.AFTERBEGIN);
render(siteCreateEditFormElement, new ElementListView(trips[0]).getElement(), RenderPosition.BEFOREEND);

const DestinationListElement = siteMainContentElement.querySelector('.event__section--destination');

render(DestinationListElement, new DestinationView(trips[0]).getElement(), RenderPosition.BEFOREEND);

for (let i = 0; i < DESTINATIONS_COUNT; i++) {
  renderTrip(siteCreateEditFormElement, new ElementListView(trips[i]).getElement(), RenderPosition.BEFOREEND);
}

flatpickr('#event-start-time-1', {
  enableTime: true,
  dateFormat: 'd/m/y H:i',
  defaultDate: Date(),
});

flatpickr('#event-end-time-1', {
  enableTime: true,
  dateFormat: 'd/m/y H:i',
  defaultDate: Date(),
});
