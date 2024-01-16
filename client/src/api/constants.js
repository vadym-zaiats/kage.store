export const api_url = "http://localhost:4000/api/";
export const products = `${api_url}products/`;
export const productsFilterEP = `${api_url}products/filter/`;
export const categoriesEP = (id) => `${api_url}catalog/${id || ""}`;
export const currentProductEP = (itemNo) => `${api_url}products/${itemNo}`;
export const productFiltersEP = `${api_url}product-filters`;
export const searchEP = `${api_url}products/search`;
