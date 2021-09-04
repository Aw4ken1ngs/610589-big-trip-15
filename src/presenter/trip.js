import { updateItem } from '../utils/trip.js';
import EventPresenter from '../presenter/event.js';
import SiteMenuView from '../view/site-menu.js';
import TripInfoView from '../view/trip-info.js';
import TripCostView from '../view/trip-cost.js';
import FiltersView from '../view/filters.js';
import ListView from '../view/trip-list.js';
import DestinationView from '../view/trip-destination.js';
import NoTripView from '../view/list-empty.js';
import { render, RenderPosition } from '../utils/render.js';
import SortingListView from '../view/sorting-list.js';


const DESTINATIONS_COUNT = 15;

export default class Trip {
  constructor(tripMain, tripsContainer) {
    this._destinationsCount = DESTINATIONS_COUNT;
    this._tripMain = tripMain;
    this._tripNav = this._tripMain.querySelector('.trip-controls__navigation');
    this._filtersContainer = this._tripMain.querySelector('.trip-controls__filters');
    this._tripsContainer = tripsContainer;
    this._tripsPresenter = new Map();

    this._tripInfoComponent = new TripInfoView();
    this._tripCostComponent = new TripCostView();
    this._menuViewComponent = new SiteMenuView();
    this._filtersComponent = new FiltersView();
    this._noTripComponent = new NoTripView();
    this._tripListComponent = new ListView();
    this._destinationComponent = new DestinationView();
    this._sortingListComponent = new SortingListView();

    this._handleEventChange = this._handleEventChange.bind(this);
  }

  init(trips) {
    this._trips = trips.slice();
    this._renderTrips();
  }

  _handleEventChange(updatedTrip) {
    this._trips = updateItem(this._trips, updatedTrip);
    this._tripsPresenter.get(updatedTrip.id).init(updatedTrip);
  }

  _renderTripInfo() {
    render(this._tripMain, this._TripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripCost() {
    render(this._TripInfoComponent, this._tripCostComponent);
  }

  _renderMenu() {
    render(this._tripNav, this._menuViewComponent);
  }

  _renderFilters() {
    render(this._filtersContainer, this._filtersComponent);
  }

  _renderControls() {
    this._renderMenuView();
    this._renderFilters();
  }

  _renderNoTrips() {
    render(this._TripsContainer, this._noTripComponent);
  }

  _renderSort() {
    render(this._TripsContainer, this._sortComponent);
  }

  _renderTripList() {
    render(this._TripsContainer, this._tripListComponent);
  }

  _renderTrips(tripList, trips) {
    for (let i = 0; i < this._eventCount; i++) {
      const eventPresenter = new EventPresenter(tripList);
      eventPresenter.init(trips[i]);
      this._eventPresenter.set(trips[i].id, eventPresenter);
    }
  }

  _renderTrip() {
    this._renderTripInfo();
    this._renderCost();
    this._renderControls();

    if (this._trips.length === 0) {
      this._renderNoTrip();
      return;
    }
    this._renderSort();
    this._renderTripList();
    this._renderTrips(this._tripListComponent, this._trips, this._handleEventChange);
  }
}
