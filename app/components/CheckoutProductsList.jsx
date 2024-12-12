import React from 'react'

const CheckoutProductsList = ({products}) => {
  return (
    <div>
                       {products.map((product, i) => {
                   return (
                     <div
                       key={i}
                       className="flex text-left  gap-4 md:w-1/2 w-full"
                     >
                       <div>
                         <img
                           src={product.product.primaryImgThumbnails[0].url}
                           className="w-[7rem] skeleton-loading aspect-square rounded"
                           alt={product.product.title}
                         />
                       </div>
                       <div className="flex flex-col gap-2">
                         <h3>{product.product.title}</h3>
                         <h4 className="text-gray-600">
                           Rs. {product.selectedVariant.price}
                         </h4>
                         <h5 className="text-gray-400">x {product.quantity}</h5>
                       </div>
                     </div>
                   );
                 })}
    </div>
  )
}

export default CheckoutProductsList
