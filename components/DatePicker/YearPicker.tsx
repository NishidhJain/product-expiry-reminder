const YearPicker = () => {
  const getYearsList = (currYear) => {
    let yearsList = [];
    const startYear = currYear - 10;
    const endYear = currYear + 10;

    for (let i = startYear; i < endYear; i++) {
      yearsList = [...yearsList, i];
    }
    return yearsList;
  };
  const currentYear = new Date().getUTCFullYear();
  //   console.log(currentYear);
  const years = getYearsList(currentYear);
  //   console.log(years);
  return (
    <>
      <select name="year">
        {years.map((year, index) => (
          <option
            key={index}
            value={year}
            selected={currentYear === year ? true : false}
          >
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

export default YearPicker;
