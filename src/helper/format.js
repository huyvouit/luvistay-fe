import moment from "moment";
const formatDate = (date) => {
  return moment(date, "YYYY-MM-DD").format("MM-DD-YYYY").replaceAll("-", "/");
};

export { formatDate,formatter };

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
});