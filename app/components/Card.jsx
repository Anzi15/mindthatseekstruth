"use client"
import Image from 'next/image';
import React from 'react';

const Card = ({ image = "/Mehran_dadbeh-standing.webp", title, description }) => {
  return (
    <div>
      {image ? (
        <Image
          src={image}
          className="aspect-[6/16] w-full object-cover rounded-2xl max-h-[30rem] my-4"
          width={720}
          height={1080}
          alt={title || "Default Alt"}
        />
      ) : (
        <p>No image available</p>
      )}
      <h2 className="font-bold text-xl   py-3">{title}</h2>
      <p className="text-gray-500d">{description}</p>
    </div>
  );
};

export default Card;
