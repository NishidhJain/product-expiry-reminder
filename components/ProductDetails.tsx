const ProductDetails = ({
  productName,
  sellerName,
  purchaseDate,
  expiryDate,
}) => {
  return (
    <div>
      <h3>{productName}</h3>
      <p>{sellerName}</p>
      <p>
        {purchaseDate} {expiryDate}
      </p>
    </div>
  );
};

export default ProductDetails;
