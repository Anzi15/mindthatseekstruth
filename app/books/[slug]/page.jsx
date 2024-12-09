import ProductPageUi from '@/app/components/ProductPageUi';
import fs from 'fs';
import path from 'path';
import ProductImgsCarousel from "@/app/components/ProductImgsCarousel.jsx";

// Fetch the data for the product based on the slug
export async function getProductData(slug) {
  const filePath = path.join(process.cwd(), 'app', 'data', 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Find the product matching the slug
  const product = data.find((product) => product.slug === slug);
  return product || null;
}

// Server component for the product detail page
export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const productData = await getProductData(slug);

  if (!productData) {
    return (
      <div className="py-10">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  const { title, description, price, image } = productData;

  return (
    <main className="flex justify-evenly w-full md:flex-row flex-col relative h-full">
        <ProductImgsCarousel
          className=" md:max-h-[565px] md:max-w-[445px] md:gap-8"
          parsedProductImages={JSON.stringify([
            productData.image_url,
          ])}
          parsedThumbnails={JSON.stringify([
            productData.image_url,
          ])}
        />
          <ProductPageUi parsedProduct={JSON.stringify(productData)}/>

          
      </main>
  );
}
