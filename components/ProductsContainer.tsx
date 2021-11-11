import Accordion from "react-bootstrap/Accordion";
import ProductDetails from "./ProductDetails";

const ProductsContainer = ({ items }) => {
  console.log(items);

  const itemsNotReturned = items.filter((item) => item.returnStatus === false);
  const itemsReturned = items.filter((item) => item.returnStatus === true);
  console.log(itemsNotReturned);

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Products to be returned</Accordion.Header>
          <Accordion.Body>
            {itemsNotReturned.map((item) => (
              <ProductDetails key={item.id} {...item} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Products returned</Accordion.Header>
          <Accordion.Body>
            {itemsReturned.map((item) => (
              <ProductDetails key={item.id} {...item} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductsContainer;
