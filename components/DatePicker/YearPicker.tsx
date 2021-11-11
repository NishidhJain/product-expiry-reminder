import Form from "react-bootstrap/Form";

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
  const years = getYearsList(currentYear);
  //   console.log(currentYear);
  //   console.log(years);
  return (
    <>
      <Form.Select defaultValue={currentYear}>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default YearPicker;
