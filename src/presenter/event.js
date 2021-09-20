import ElementListView from '../view/trip-element.js';
import EditFormView from '../view/edit-form.js';
import { render, replace, remove, Key, RenderPosition } from '../utils/render.js';

export default class Event {
  constructor(eventList) {
    this._eventList = eventList;
    this._editEventComponent = null;
    this._setEditClickHandler = this._setEditClickHandler.bind(this);
    this._editFormSubmitHandler = this._editFormSubmitHandler.bind(this);
    this._hideFormBtnClickHandler = this._hideFormBtnClickHandler.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._favoriteBtnClickHandler = this._favoriteBtnClickHandler.bind(this);
  }

  init(event) {
    this._event = event;

    const prevEventComponent = this._eventComponent;
    const prevEditEventComponent = this._editEventComponent;

    this._eventComponent = new ElementListView(event);
    this._editEventComponent = new EditFormView(event);

    this._eventComponent.setEditClickHandler(this._setEditClickHandler);
    this._eventComponent.setFavoriteBtnClickHandler(this._favoriteBtnClickHandler);
    this._editEventComponent.setFormSubmitHandler(this._editFormSubmitHandler);
    this._editEventComponent.setHideFormBtnClickHandler(this._hideFormBtnClickHandler);

    if (prevEventComponent === null || prevEditEventComponent === null) {
      render(this._eventList, this._eventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._eventList.getElement().contains(prevEventComponent.getElement())) {
      replace(this._eventComponent, prevEventComponent);
    }

    if (this._eventList.getElement().contains(prevEditEventComponent.getElement())) {
      replace(this._editEventComponent, prevEditEventComponent);
    }

    remove(prevEventComponent);
    remove(prevEditEventComponent);
  }

  destroy() {
    remove(this._eventComponent);
    remove(this._editEventComponent);
  }

  _replaceEventToForm() {
    replace(this._editEventComponent, this._eventComponent);
  }

  _replaceFormToEvent() {
    replace(this._eventComponent, this._editEventComponent);
    window.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === Key.ESC || evt.key === Key.ESCAPE) {
      evt.preventDefault();
      this._replaceFormToEvent();
    }
  }

  _setEditClickHandler() {
    this._replaceEventToForm();
    window.addEventListener('keydown', this._escKeyDownHandler);
  }

  _editFormSubmitHandler(event) {
    this._changeData(event);
    this._replaceFormToEvent();
  }

  _hideFormBtnClickHandler() {
    this._replaceFormToEvent();
  }

  _favoriteBtnClickHandler() {
    this._changeData(
      Object.assign(
        {},
        this._trip,
        {
          isFavorite: !this._trip.isFavorite,
        },
      ),
    );
  }
}
