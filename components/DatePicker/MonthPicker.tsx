const MonthPicker = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currMonth = months[new Date().getMonth()];
  // console.log(currMonth);

  return (
    <>
      <label htmlFor="month">Month</label>
      <select name="month" id="month">
        {months.map((month, index) => (
          <option
            key={index}
            value={month}
            selected={currMonth === month ? true : false}
          >
            {month}
          </option>
        ))}
      </select>
    </>
  );
};

export default MonthPicker;
