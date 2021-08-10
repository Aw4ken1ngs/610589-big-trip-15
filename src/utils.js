import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const humanizeTaskDateFirst = (dateFirsts) => dayjs(dateFirsts).format('D MMM');
export const humanizeTaskDateFrom = (dateFrom) => dayjs(dateFrom).format('mm:ss');
export const humanizeTaskDateTo = (dateTo) => dayjs(dateTo).format('mm:ss');
