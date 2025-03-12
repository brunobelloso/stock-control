import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductFormWrapper from "./components/ProductFormWrapper";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleSuccess = () => {
    setRefresh(!refresh);
    setEditProduct(null); // Clear the edit product after success
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleClose = () => {
    setEditProduct(null); // Clear the edit product when closing
  };

  return (
    <div>
      <h1>Control Stock</h1>
      <ProductFormWrapper product={editProduct} onSuccess={handleSuccess} onClose={handleClose} />
      <ProductList onEdit={handleEdit} refresh={refresh} />
    </div>
  );
};

export default App;