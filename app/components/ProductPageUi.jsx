"use client"
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { IoMdCart } from "react-icons/io";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { MdOutlineRemoveRedEye } from "react-icons/md";


const ProductPageUi = ({parsedProduct}) => {
  const router = useRouter()
  const product = JSON.parse(parsedProduct)
    const [selectedVariant, setSelectedVariant] = useState({price: 20, comparePrice: 30, name:"meow"});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [routeChanged, setRouteChanged] = useState(false);
  const [isExpiryDateValid, setIsExpiryDateValid] = useState(false);
  const [shouldShowComparePrice, setShouldShowComparePrice] = useState(false);
  const [quantity, setQuantity] = useState(1);
    const productId = product.productId

    
  const addToCart = () => {
    const productId = product.productId
    const prevCartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    const productIndex = prevCartItems.findIndex(
      (item) => item.productId === productId
    );
    const productData = { productId, quantity, selectedVariant, product };

    if (productIndex === -1) {
      toast.success("Item Added to Cart");
      // Product is not in the cart, add a new item
      prevCartItems.push(productData);
      localStorage.setItem("cart-items", JSON.stringify(prevCartItems));
    } else {
      // Product is already in the cart, update its quantity
      prevCartItems[productIndex].quantity += quantity;
      localStorage.setItem("cart-items", JSON.stringify(prevCartItems));
      toast.success("Item Quantity Updated");
    }
  };

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };
  
  const redirectToCheckout = () => {
    const variantIndex = product.variants.findIndex(
      variant => JSON.stringify(variant) === JSON.stringify(selectedVariant)
    );
    const validVariantIndex = variantIndex === -1 ? 0 : variantIndex; // Default to 0 if -1
    router.push(`/checkout?source=${product.slug}&quantity=${quantity}&selectedVariantIndex=${validVariantIndex}`);
  };
  

  const updateQuantity = (qnty = 1, action) => {
    setQuantity((prevQuantity) => {
      if (action === "increment") {
        return prevQuantity + qnty;
      } else if (action === "decrement" && prevQuantity > 1) {
        return Math.max(prevQuantity - qnty, 1);
      } else {
        return Math.max(qnty, 1); // Ensure qnty is at least 1
      }
    });
  };

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setSelectedVariant(product.variants[0] || null);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchDocument();
  }, [productId]);
  

  if (error) {
    return <Navigate href="/" />;
  }
  useEffect(()=>{
    if(product.discountExpiryDate == null) return;
    const expiryDateValid = product.discountExpiryDate ? true : formatRemainingTime(product.discountExpiryDate) !== "00:00:00" && true;
    setIsExpiryDateValid(expiryDateValid)
  },[product.discountExpiryDate])
  const parsePrice = (price) => {
    const parsed = parseFloat(price);
    return isNaN(parsed) ? 0 : parsed;
  };

  useEffect(() => {
    if (isLoading) return;
  
    // Parse the compare price for the selected variant or fall back to product compare price
    const comparePrice = parsePrice(selectedVariant?.comparePrice || product?.comparePrice);
    const currentPrice = parsePrice(selectedVariant?.price || product?.price); // Actual price
  
    // Ensure comparePrice is non-zero and less than the actual price
    if (comparePrice && comparePrice > 0 && comparePrice > currentPrice) {
      setShouldShowComparePrice(true);
    } else {
      setShouldShowComparePrice(false); // Reset if conditions aren't met
    }
  }, [product.comparePrice, selectedVariant?.comparePrice, selectedVariant?.price, product?.price, isLoading]);
  

  return (
    <div className="details-section flex flex-col pt-6 text-left gap-3 w-full md:w-1/2 px-6">
    <div className="product-product flex flex-col md:gap-6 gap-3 md:pb-8 py-4">
      <div className="flex flex-col gap-4">
        {product.subTitle && (
          <p
            className={`capitalize`}
          >
            {product.subTitle}
          </p>
        )}
        <h1
          className={`product-title text-3xl tracking-wide font-bold text-left uppercase`}
          id="product-title-elem"
        >
          {product.title}
        </h1>
      </div>

      <div className="flex items-end gap-3">
        <div className="flex gap-4 md:p-0 pt-3">
          <h3
            className={`product-price text-2xl text-brandRed font-medium tracking-wide `}
            id="product-price-elem"
          >
            $
           {selectedVariant.price * quantity}
          </h3>
        </div>

        {shouldShowComparePrice &&  (
          <div>
            <div>
              $
              <s className="line-through">
                {
                  selectedVariant.comparePrice }
              </s>
            </div>
          </div>
        )}
      </div>
      {product.variants && product.variants.length > 1 && (
        <div>
          <p className="font-bold">Variants</p>
          <div className="relative flex w-full max-w-[24rem] rounded-xl  bg-clip-border text-gray-700 gap-3">
            {product.variants.map((variant, index) => (
              <div
                key={index}
                role="button"
                onClick={() => handleVariantChange(variant)}
                className={`border flex items-center w-fit p-0 leading-tight transition-all max-w-[80%] rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 
                    ${
                      selectedVariant === variant
                        ? "bg-blue-gray-50 text-blue-gray-900"
                        : ""
                    }`}
              >
                <label className="flex items-center w-full px-3 py-2 cursor-pointer">
                  <div className="grid mr-3 place-items-center">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-0 rounded-full cursor-pointer"
                        htmlFor={`variant-radio-${index}`}
                      >
                        <input
                          name="variant-radio"
                          id={`variant-radio-${index}`}
                          type="radio"
                          checked={selectedVariant.name === variant.name} // This ensures the correct radio button is checked
                          readOnly
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                        />
                        <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              product-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                    {variant.name}
                  </p>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    <p className="font-bold">Quantity</p>
    <form className="max-w-xs md:p-2 flex justify-left items-start">
      <div className="relative flex items-start max-w-[8rem]">
        <button
          type="button"
          id="decrement-button"
          product-input-counter-decrement="quantity-input"
          className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          onClick={() => {
            updateQuantity(1, "decrement");
          }}
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
      type="number"
      id="quantity-input"
      product-input-counter={'dd'}
      aria-describedby="helper-text-explanation"
      className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
      value={quantity}
      required
      onInput={(e) => {
        updateQuantity(e.target.value);
      }}
      style={{
        appearance: 'none', // For modern browsers
        MozAppearance: 'textfield', // For Firefox
      }}
    />
        <button
          onClick={() => {
            updateQuantity(1, "increment");
          }}
          type="button"
          id="increment-button"
          product-input-counter-increment="quantity-input"
          className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
    <div className="cta-con pt-8">
      <div className="two_btn_con flex gap-4 items-center mb-4 md:flex-row flex-row-reverse md:w-[80%] ">
        <Button
          className="text-nowrap flex items-center gap-3 py-4 px-6"
          onClick={addToCart}

          variant="outlined"
        >
          <IoMdCart className="text-xl" />
          <p className="hidden md:flex">Add To Cart</p>
        </Button>
        <Button className="w-full py-3.5 text-lg bg-black font-semibold" onClick={redirectToCheckout}>Buy now</Button>


        
          <div className="md:hidden w-full px-2 py-2  text-white fixed bottom-0 left-0 right-0 z-50 m-auto">
            <button
              className="bg-[#FE0000] w-full max-w-[95vw] py-5 rounded-2xl flex px-4 items-center gap-2 justify-between"
              onClick={addToCart}
            >
              <div className="flex items-center gap-3">
                <div className="font-bold text-lg">$ {product.price}</div>
                {isExpiryDateValid && (
                  <div className="flex flex-col">
                    {(parseInt(selectedVariant?.comparePrice) ||
                      product.comparePrice) &&
                      ((selectedVariant.comparePrice !== 0 &&
                        selectedVariant.comparePrice !== "0") ||
                        (product.comparePrice !== 0 &&
                          product.comparePrice !== "0")) && (
                        <div>
                          <div>
                            $
                            <s className="line-through">
                              {selectedVariant.comparePrice
                                ? selectedVariant.comparePrice * quantity
                                : product.comparePrice * quantity}
                            </s>
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>

              <div className="flex gap-3 text-xl uppercase font-bold  items-center">
                <IoMdCart className="text-xl" />
                Add To Cart
              </div>
            </button>
          </div>
        
      </div>
    </div>

    {
      product?.sampleBook  && (
        <a target="_blank" href={product?.sampleBook} className="flex gap-2    items-center">
          <MdOutlineRemoveRedEye />
          View sample book
        </a>
      )
    }

    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 my-8">
  <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917L5.724 10.5 15 1.5"
      />
    </svg>
    <span>Insightful content</span>
  </li>
  <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917L5.724 10.5 15 1.5"
      />
    </svg>
    <span>Elegant writing style</span>
  </li>
  <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917L5.724 10.5 15 1.5"
      />
    </svg>
    <span>Perfect for literary enthusiasts</span>
  </li>
  <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917L5.724 10.5 15 1.5"
      />
    </svg>
    <span>Beautifully designed cover</span>
  </li>
  <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917L5.724 10.5 15 1.5"
      />
    </svg>
    <span>Rich and engaging themes</span>
  </li>
</ul>

  </div>
  )
}

export default ProductPageUi
