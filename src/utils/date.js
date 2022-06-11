export const formatDate = dateString => {
  const date = new Date(dateString);
  const month = date.toLocaleString('ru-RU', { month: '2-digit' });
  const day = date.toLocaleString('ru-RU', { day: '2-digit' });
  const year = date.toLocaleString('ru-RU', { year: 'numeric' });

  return `${year}-${month}-${day}`;
};

export const addDays = (dateString, days) => {
  const date = new Date(dateString);

  date.setDate(date.getDate() + days);

  return formatDate(date);
};
