import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ bookImg, bookTitle, bookDescription, bookSlug = "" }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Hover to zoom container */}
      <Link className="overflow-hidden max-w-full relative aspect-square group" href={`/books/${bookSlug}`}>
        <Image
          className="rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105 skeleton-loading"
          src={bookImg}
          alt={bookTitle}
          width={400}
          height={300}
        />
      </Link>
      <div className="p-5">
        <Link href={`/books/${bookSlug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {bookTitle}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bookDescription.slice(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
