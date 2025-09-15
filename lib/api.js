const BASE = "https://fakestoreapi.com";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
export async function fetchProduct(id) {
    const res = await fetch(`${BASE}/products/${id}`);
    return res.json();
}
export async function fetchCategories() {
    const res = await fetch(`${BASE}/products/categories`);
    return res.json();
}
export async function fetchProductsByCategory(cat){
    const res = await fetch(`${BASE}/products/category/${cat}`);
    return res.json();
}


