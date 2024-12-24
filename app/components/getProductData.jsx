import data from '../data/products.json';

export async function getProductData(slug) {
  // Find the product matching the slug
  const product = data.find((product) => product.slug === slug);
  return product || null;
}
