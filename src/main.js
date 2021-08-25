import SiteMenuView from './view/site-menu.js';
import TripInfoView from './view/trip-info.js';
import TripCostView from './view/trip-cost.js';
import FiltersView from './view/filters.js';
import SortingView from './view/sorting.js';
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

  // tripComponent.setEditClickHandler(() => {
  //   replaceEventToForm();
  //   document.addEventListener('keydown', onEscKeyDown);
  // });

  // tripEditComponent.setFormSubmitHandler(() => {
  //   replaceFormToEvent();
  //   document.removeEventListener('keydown', onEscKeyDown);
  // });

  // const onHideFormBtnClick = () => {
  //   replaceFormToEvent();
  //   document.removeEventListener('keydown', onEscKeyDown);
  // };

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
  // tripEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', onHideFormBtnClick);
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
render(SortingListComponent, new SortingView(), RenderPosition.BEFOREEND);
render(siteMainContentElement, new ListView(), RenderPosition.BEFOREEND);

const siteCreateEditFormElement = siteMainContentElement.querySelector('.trip-events__list');

render(siteCreateEditFormElement, new EditFormView(trips[0]), RenderPosition.AFTERBEGIN);

const DestinationListElement = siteMainContentElement.querySelector('.event__section--destination');

render(DestinationListElement, new DestinationView(trips[0]), RenderPosition.BEFOREEND);

if (trips.length === 0) {
  render(siteMainContentElement, new NoTripView());
} else {
  render(siteMainContentElement, new SortingView());
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
});
