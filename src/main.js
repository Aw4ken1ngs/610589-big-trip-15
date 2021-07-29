import { createSiteMenuTemplate } from './view/site-menu.js';
import { createTripInfoTemplate } from './view/trip-info.js';
import { createFiltersTemplate } from './view/filters.js';
import { createSortingTemplate } from './view/sorting.js';
import { createFormTemplate } from './view/create-form.js';
import { createEditFormTemplate } from './view/edit-form.js';
import { createDestinationTemplate } from './view/trip-destination.js';

const DESTINATION_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__navigation');
const siteInfoElement = siteMainElement.querySelector('.trip-main__trip-info');
const siteFiltersElement = siteMainElement.querySelector('.trip-filters');

render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');
render(siteInfoElement, createTripInfoTemplate(), 'beforeend');
render(siteFiltersElement, createFiltersTemplate(), 'beforeend');

const siteMainContentElement = document.querySelector('.trip-events');
const siteSoryingElement = siteMainContentElement.querySelectorAll('.trip-sort__item');

render(siteSoryingElement, createSortingTemplate(), 'beforeend');

const siteCreateFormElement = document.querySelector('.trip-events__list');
const siteFormElement = siteCreateFormElement.querySelectorAll('.trip-events__item');

render(siteFormElement, createFormTemplate(), 'beforeend');

const siteCreateEditFormElement = document.querySelector('.event--edit');
const siteEditFormElement = siteCreateEditFormElement.querySelector('.event__header');

render(siteEditFormElement, createEditFormTemplate(), 'beforeend');

const DestinationFormElement = document.querySelector('.event__field-group--destination');
const DestinationListElement = DestinationFormElement.querySelector('#destination-list-1');

render(DestinationListElement, createDestinationTemplate(), 'beforeend');

for (let i = 0; i < DESTINATION_COUNT; i++) {
  render(DestinationListElement, createDestinationTemplate(), 'beforeend');
}
