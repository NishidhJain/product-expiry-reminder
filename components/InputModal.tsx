import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "../components/DatePicker/Index";
import { useState } from "react";

const InputModal = ({ show, handleClose }) => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    sellerName: "",
    returnStatus: false,
    purchaseDate: "",
    expiryDate: "",
  });

  const onInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="">
          <Modal.Title className="fw-normal">Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-1">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Metacin"
                name="productName"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Seller Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Aakruti Medicines"
                name="sellerName"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Purchase Date</Form.Label>
              <DatePicker />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Expiry Date</Form.Label>
              <DatePicker />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleClose}
              className="px-4"
            >
              Add Product
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-1"></Modal.Footer>
      </Modal>
    </>
  );
};

export default InputModal;
