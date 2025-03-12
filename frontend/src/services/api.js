import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Usa el proxy configurado en Vite
});

// Funciones para interactuar con la API
export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const createProduct = (product) => api.post("/products", product);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);