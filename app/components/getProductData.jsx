import data from "../data/liveBooks.js"
import { getDocs } from 'firebase/firestore';

export async function getProductData(slug) {
  const product = data.find((product) => product.slug === slug);
  return product || null;
}
