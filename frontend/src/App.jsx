import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductFormWrapper from "./components/ProductFormWrapper";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleSuccess = () => {
    setRefresh(!refresh);
    setEditProduct(null); // Limpiar el formulario después de crear producto
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleClose = () => {
    setEditProduct(null); // Limpiar el formulario al cerrar
  };

  return (
    <div>
      <h1>Control de Stock</h1>
      <ProductFormWrapper product={editProduct} onSuccess={handleSuccess} onClose={handleClose} />
      <ProductList onEdit={handleEdit} />
    </div>
  );
};

export default App;