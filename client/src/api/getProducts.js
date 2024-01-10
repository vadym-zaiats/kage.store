import { products } from "./constants";

export async function getAllProducts() {
  try {
    const res = await fetch(products);
    if (!res.ok) {
      throw new Error("Server error");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return console.log(error.massage);
  }
}
