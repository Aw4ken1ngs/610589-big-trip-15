import dayjs from 'dayjs';
export const humanizeTaskDateFirst = (dateFirsts) => dayjs(dateFirsts).format('D MMM');
export const humanizeTime = (time) => dayjs(time).format('hh:mm');

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};
