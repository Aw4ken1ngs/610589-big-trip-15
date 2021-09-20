/*import SiteMenuView from './view/site-menu.js';
import TripInfoView from './view/trip-info.js';
import TripCostView from './view/trip-cost.js';
import FiltersView from './view/filters.js';
import ListView from './view/trip-list.js';
import EditFormView from './view/edit-form.js';
import DestinationView from './view/trip-destination.js';
import ElementListView from './view/trip-element.js';
import NoTripView from './view/list-empty.js';
import { generateTrip } from './mock/trip.js';
import { render, RenderPosition, Key, replace } from './utils/render.js';
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

  const replaceEventToForm = () => {
    replace(tripEditComponent, tripComponent);
  };

  const replaceFormToEvent = () => {
    replace(tripComponent, tripEditComponent);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
      evt.preventDefault();
      replaceFormToEvent();
    }
  };

  const onRollUpBtnClick = () => {
    replaceEventToForm();
    window.addEventListener('keydown', onEscKeyDown);
  };

  const onEditFormSubmit = () => {
    replaceFormToEvent();
  };

  const onHideFormBtnClick = () => {
    replaceFormToEvent();
  };
  tripComponent.setEditClickHandler(onRollUpBtnClick);
  tripEditComponent.setFormSubmitHandler(onEditFormSubmit);
  tripEditComponent.setHideFormBtnClickHandler(onHideFormBtnClick);
  render(tripListElement, tripComponent, RenderPosition.BEFOREEND);
};

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainElement, new TripInfoView(), RenderPosition.AFTERBEGIN);
render(siteFiltersElement, new FiltersView(), RenderPosition.BEFOREEND);

const siteCostElement = siteMainElement.querySelector('.trip-info');

render(siteCostElement, new TripCostView(trips), RenderPosition.BEFOREEND);

const siteMainContentElement = document.querySelector('.trip-events');

const SortingListComponent = new SortingListView();
render(siteMainContentElement, SortingListComponent, RenderPosition.AFTERBEGIN);
render(siteMainContentElement, new ListView(), RenderPosition.BEFOREEND);

const siteCreateEditFormElement = siteMainContentElement.querySelector('.trip-events__list');

render(siteCreateEditFormElement, new EditFormView(trips[0]), RenderPosition.AFTERBEGIN);

const DestinationListElement = siteMainContentElement.querySelector('.event__section--destination');

render(DestinationListElement, new DestinationView(trips[0]), RenderPosition.BEFOREEND);

if (trips.length === 0) {
  render(siteMainContentElement, new NoTripView());
} else {
  render(siteMainContentElement, new SortingListView());
}

for (let i = 0; i < DESTINATIONS_COUNT; i++) {
  renderTrip(siteCreateEditFormElement, trips[i], RenderPosition.BEFOREEND);
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
});*/

import { generateTrip } from './mock/trip.js';
import flatpickr from 'flatpickr';
import TripPresenter from './presenter/trip.js';

const DESTINATIONS_COUNT = 15;

const trips = new Array(DESTINATIONS_COUNT).fill().map(generateTrip);
const tripMain = document.querySelector('.trip-main');
const tripsContainer = document.querySelector('.trip-events');
new TripPresenter(tripMain, tripsContainer).init(trips);

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
