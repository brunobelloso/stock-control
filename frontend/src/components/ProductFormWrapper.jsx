import React from "react";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";

const ProductFormWrapper = ({ product, onSuccess, onClose }) => {
  return (
    <ProductForm product={product} onSuccess={onSuccess} onClose={onClose} />
  );
};

ProductFormWrapper.propTypes = {
  product: PropTypes.object,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductFormWrapper;