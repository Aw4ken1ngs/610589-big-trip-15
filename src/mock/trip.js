import dayjs from 'dayjs';
//import flatpickr from 'flatpickr';

//Генерируем случайное число
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

//Генерируем случайную дату +/- 7 дней
const generateDate = () => {

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

//Генерируем описание
const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

//Генерируем тип транспорта
const getRandomPointType = () => {
  const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};

//Генерируем случайный город
const getRandomCity = () => {
  const cities = ['Amsterdam', 'Geneva', 'Chamonix'];
  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
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
    pictures: 'http://picsum.photos/248/152?r=',
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: {
      title: 'Choose meal',
      price: 180,
    },
  };
};
