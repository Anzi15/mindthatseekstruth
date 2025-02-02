"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BookSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10">
     <h2 className="md:text-4xl text-2xl font-bold uppercase my-4">Our books</h2>

     <a href='/books/me-my-psyche-and-i' className="flex justify-center items-center m-auto py-10 gap-4 flex-col md:flex-row">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title text-2xl font-semibold py-2">
            Me, My Psyche and I
        </h3>
        <p className="text-gray-500">
        Have you ever wondered why you are built the way you are. What is it that makes you who you are? Have you ever asked yourself “ Is there more to me?”, “Is What I call my Psyche is the whole...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/mcWJfdc/smartmockups-m3ug5rw0.jpg" alt="Me, My Psyche and I" width="720" height="1080" className="rounded skeleton-loading" />
        </div>
     </a>


     <a href='/books/the-break-up-pain-handbook' className="flex justify-center items-center m-auto py-10 gap-4 flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title py-2 text-2xl font-semibold">
            The Break up Pain
        </h3>
        <p className="text-gray-500">
        Was I not enough for her? Is there someone else more of a man than I am? Why did she do that to me? How can I go on and be happy now? I treated her like a princess. We made pla...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/G9Y8RFy/mediamodifier-image-1.png" alt="Me, My Psyche and I" width="720" height="1080" className="rounded-lg skeleton-loading" />
        </div>
     </a>

     <a href='books/me-my-psyche-and-i' className="flex justify-center items-center m-auto py-10 gap-4 flex-col md:flex-row">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title text-2xl font-semibold py-2">
        Transient thoughts and Me!
        </h3>
        <p className="text-gray-500">
        Almost all of us at one time or another find ourselves thinking thoughts that were never invited into our mind. These thoughts occupy our time and energy and some of them question everything we do, think, like or are. We won...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/VvxVgsq/mediamodifier-image.png" alt="Me, My Psyche and I" width="720" height="1080" className="skeleton-loading" />
        </div>
     </a>

<Link
href="/shop"
className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-normal text-gray-600 rounded-lg group bg-gradient-to-br from-violet-600 to-blue-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white  text-xl my-10 ">
<span
  className="relative py-2 px-8 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  View all books
</span>
</Link>
    </section>
  )
}

export default BookSection
