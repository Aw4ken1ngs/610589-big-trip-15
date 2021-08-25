import dayjs from 'dayjs';
export const humanizeTaskDateFirst = (dateFirsts) => dayjs(dateFirsts).format('D MMM');
export const humanizeTime = (time) => dayjs(time).format('hh:mm');
