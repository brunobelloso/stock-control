import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createProduct, updateProduct } from "../services/api";

const ProductForm = ({ product, onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        stock: product.stock,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Log form data
    try {
      if (product) {
        await updateProduct(product._id, formData);
      } else {
        await createProduct(formData);
      }
      onSuccess(); // Update the product list
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
      stock: "",
    });
    if (onClose) {
      onClose();
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{product ? "Edit Product" : "Create Product"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />
      <button type="submit">{product ? "Update" : "Create"}</button>
      {product && <button type="button" onClick={handleClose}>Close</button>}
    </form>
  );
};

ProductForm.propTypes = {
  product: PropTypes.object,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductForm;