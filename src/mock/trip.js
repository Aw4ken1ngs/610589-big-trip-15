import dayjs from 'dayjs';
//import flatpickr from 'flatpickr';
import { getRandomInteger } from '../utils.js';
import { DESKRIPTIONS, TYPES, CITIES, PICTURES } from '../const.js';
//Генерируем случайную дату +/- 7 дней
const generateDate = () => {

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

//Генерируем описание
const generateDescription = () => {
  const randomIndex = getRandomInteger(0, DESKRIPTIONS.length - 1);
  return DESKRIPTIONS[randomIndex];
};

//Генерируем тип транспорта
const getRandomPointType = () => {
  const randomIndex = getRandomInteger(0, TYPES.length - 1);

  return TYPES[randomIndex];
};

//Генерируем случайный город
const getRandomCity = () => {
  const randomIndex = getRandomInteger(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

//Генерируем случайную картинку

const getRandomPictures = () => {
  const randomIndex = getRandomInteger(0, PICTURES.length - 1);

  return PICTURES[randomIndex];
};

//Получаем рандомную точку маршрута с полями
export const generateTrip = () => {
  const date = generateDate();
  return {
    description: generateDescription(),
    pointType: getRandomPointType(),
    city: getRandomCity(),
    dateFrom: date,
    dateTo: date,
    dateFirst: date,
    pictures: getRandomPictures(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000),
    offers: {
      title: 'Choose meal',
      price: 180,
    },
  };
};
