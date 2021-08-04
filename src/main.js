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

const DESTINATION_COUNT = 15;

const trips = new Array(DESTINATION_COUNT).fill().map(generateTrip);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteMainElement.querySelector('.trip-controls__filters');

render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');
render(siteFiltersElement, createFiltersTemplate(), 'beforeend');
render(siteMainElement, createTripInfoTemplate(), 'afterbegin');

const siteCostElement = siteMainElement.querySelector('.trip-info');

render(siteCostElement, createTripCostTemplate(), 'beforeend');

const siteMainContentElement = document.querySelector('.trip-events');

render(siteMainContentElement, createSortingTemplate(), 'beforeend');
render(siteMainContentElement, createListTemplate(), 'beforeend');

const siteCreateEditFormElement = siteMainContentElement.querySelector('.trip-events__item');

render(siteCreateEditFormElement, createEditFormTemplate(), 'afterbegin');
render(siteCreateEditFormElement, createElementListTemplate(), 'beforeend');

const DestinationListElement = siteMainContentElement.querySelector('.event__section--destination');

render(DestinationListElement, createDestinationTemplate(), 'beforeend');

for (let i = 0; i < DESTINATION_COUNT; i++) {
  render(siteCreateEditFormElement, createElementListTemplate(trips[i]), 'beforeend');
}
