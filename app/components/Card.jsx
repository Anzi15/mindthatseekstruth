import Image from 'next/image';
import React from 'react';

const Card = ({ image = "/Mehran_dadbeh-standing.webp", title, description }) => {
  return (
    <div>
      {image ? (
        <Image
          src={image}
          className="aspect-[9/12] w-full object-cover rounded-2xl"
          width={720}
          height={1080}
          alt={title || "Default Alt"}
        />
      ) : (
        <p>No image available</p>
      )}
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
