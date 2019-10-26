import fecha from 'fecha';

const dateFormatter = dateTime => {
  const date = fecha.format(new Date(dateTime), 'MMMM D, YYYY');

  return date;
};

export default dateFormatter;
