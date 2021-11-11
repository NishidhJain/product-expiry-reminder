import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "../components/DatePicker/Index";

const InputModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="">
          <Modal.Title className="fw-normal">Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-1">
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Metacin"
                name="productName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Seller Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Aakruti Medicines"
                name="sellerName"
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
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-1">
          <Button
            variant="primary"
            type="submit"
            onClick={handleClose}
            className="px-4"
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InputModal;
