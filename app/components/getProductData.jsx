import data from '../data/products.json';
import { getDocs } from 'firebase/firestore';

export async function getProductData(slug) {
  // Find the product matching the slug
  const product = data.find((product) => product.slug === slug);
  return product || null;
}
