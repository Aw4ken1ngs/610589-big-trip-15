import dayjs from 'dayjs';
import { getRandomInteger } from '../utils/common.js';
import { DESCRIPTIONS, TYPES, CITIES, PICTURES } from '../const.js';
import { nanoid } from 'nanoid';
//Генерируем случайную дату +/- 7 дней
const generateDate = (duration, type = 'hour') => {

  const daysGap = getRandomInteger(-duration, duration);

  return dayjs().add(daysGap, type).toDate();
};

// const generateTime = () => {
//   return {
//     from,
//     to,
//     duration,
//   };
// };

//Генерируем описание
const generateDescription = () => {
  const randomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  return DESCRIPTIONS[randomIndex];
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
    timeFrom: generateDate(7),
    timeTo: generateDate(7),
    dateFirst: date,
    pictures: getRandomPictures(),
    id: nanoid(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(10, 1000),
    offers: {
      title: 'Choose meal',
      price: 180,
    },
  };
};
