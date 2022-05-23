const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

const handleCheckout = (checkin) => {
  if (checkin !== "") {
    const newArr = checkin.split("-"); // ["29", "1", "2016"]
    const today = new Date(
      parseInt(newArr[0]),
      parseInt(newArr[1]) - 1,
      parseInt(newArr[2])
    );
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  } else {
    console.log("run");
    return disablePastDate();
  }
};
