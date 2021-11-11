import { useState } from "react";
import Monthpicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => {
  const [month, setMonth] = useState("");

  return (
    <Row>
      <Col>
        <Monthpicker />
      </Col>
      <Col>
        <YearPicker />
      </Col>
    </Row>
  );
};

export default Index;
