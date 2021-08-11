import { createSiteMenuTemplate } from './view/site-menu.js';
import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripCostTemplate } from './view/trip-cost.js';
import { createFiltersTemplate } from './view/filters.js';
import { createSortingTemplate } from './view/sorting.js';
import { createListTemplate } from './view/trip-list.js';
import { createEditFormTemplate } from './view/edit-form.js';
import { createDestinationTemplate } from './view/trip-destination.js';
import { createElementListTemplate } from './view/trip-element.js';
import { generateTrip } from './mock/trip.js';
import flatpickr from 'flatpickr';

const DESTINATION_COUNT = 15;

const trips = new Array(DESTINATION_COUNT).fill().map(generateTrip);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteMainElement.querySelector('.trip-controls__filters');

render(siteHeaderElement, createSiteMenuTemplate(trips[0]), 'beforeend');
render(siteFiltersElement, createFiltersTemplate(trips[0]), 'beforeend');
render(siteMainElement, createTripInfoTemplate(trips[0]), 'afterbegin');

const siteCostElement = siteMainElement.querySelector('.trip-info');

render(siteCostElement, createTripCostTemplate(trips[0]), 'beforeend');

const siteMainContentElement = document.querySelector('.trip-events');

render(siteMainContentElement, createSortingTemplate(trips[0]), 'beforeend');
render(siteMainContentElement, createListTemplate(trips[0]), 'beforeend');

const siteCreateEditFormElement = siteMainContentElement.querySelector('.trip-events__item');

render(siteCreateEditFormElement, createEditFormTemplate(trips[0]), 'afterbegin');
render(siteCreateEditFormElement, createElementListTemplate(trips[0]), 'beforeend');

const DestinationListElement = siteMainContentElement.querySelector('.event__section--destination');

render(DestinationListElement, createDestinationTemplate(trips[0]), 'beforeend');

for (let i = 0; i < DESTINATION_COUNT; i++) {
  render(siteCreateEditFormElement, createElementListTemplate(trips[i]), 'beforeend');
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
