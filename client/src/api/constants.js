export const API_URL = "http://localhost:4000/api/";
export const products = `${API_URL}products/`;
export const productsFilterEP = `${API_URL}products/filter/`;
export const categoriesEP = (id) => `${API_URL}catalog/${id || ""}`;
export const currentProductEP = (itemNo) => `${API_URL}products/${itemNo}`;
export const productFiltersEP = `${API_URL}product-filters`;
export const searchEP = `${API_URL}products/search`;
