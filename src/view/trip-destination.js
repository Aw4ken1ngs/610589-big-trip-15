export const createDestinationTemplate = (des) => {
  const { description, pictures } = des;
  return `<h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
      <img class="event__photo" src="img/photos/${pictures}" alt="Event photo">
    </div>
  </div>`;
};
