import moment from "moment";
const formatDate = (date) => {
  return moment(date, "YYYY-MM-DD").format("MM-DD-YYYY").replaceAll("-", "/");
};

export { formatDate };
