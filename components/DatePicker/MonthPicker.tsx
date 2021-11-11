import Form from "react-bootstrap/Form";
import { useState } from "react";

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
  const currentMonth = months[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  console.log(selectedMonth);

  return (
    <>
      <Form.Select
        defaultValue={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        name="month"
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default MonthPicker;
