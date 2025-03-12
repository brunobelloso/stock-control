import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";

const ProductList = ({ onEdit, refresh }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [refresh]); // Add refresh as a dependency

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts(); // Actualizar la lista despues de eliminar
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    onEdit(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price} - {product.category} - Stock: {product.stock}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;