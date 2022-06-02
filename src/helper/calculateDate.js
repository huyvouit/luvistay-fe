export const calculateDate = (date1, date2) => {
  let firstDate = new Date(date1);
  var secondDate = new Date(date2);
  return (secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24);
};
