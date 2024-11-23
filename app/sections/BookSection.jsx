import { Section } from 'lucide-react'
import React from 'react'
import BookCard from '../components/BookCard'
import Image from 'next/image'
import Link from 'next/link'

const BookSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10">
     <h2 className="md:text-4xl text-2xl font-bold uppercase my-4">Our books</h2>

     <div className="flex justify-center items-center m-auto py-10 gap-4 flex-col md:flex-row">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title text-2xl font-semibold py-2">
            Me, My Psyche and I
        </h3>
        <p className="text-gray-500">
        Dive deep into the uncharted territories of the human mind with Me, My Psyche, and I, a thought-provoking and introspective exploration of self-discovery, mental health, and perso...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/mcWJfdc/smartmockups-m3ug5rw0.jpg" alt="Me, My Psyche and I" width="720" height="1080" className="rounded" />
        </div>
     </div>


     <div className="flex justify-center items-center m-auto py-10 gap-4 flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title py-2 text-2xl font-semibold">
            The Break up Pain
        </h3>
        <p className="text-gray-500">
        The Breakup Pain is a poignant and emotionally charged book that delves into the raw and often overwhelming experience of heartbreak. Through a blend of personal stories, expert advice...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/G9Y8RFy/mediamodifier-image-1.png" alt="Me, My Psyche and I" width="720" height="1080" className="rounded-lg" />
        </div>
     </div>

     <div className="flex justify-center items-center m-auto py-10 gap-4 flex-col md:flex-row">
        <div className="md:w-1/3 p-8 md:0">
        <h3 className="title text-2xl font-semibold py-2">
        Transient thoughts and Me!
        </h3>
        <p className="text-gray-500">
        a captivating journey through the fleeting and often elusive nature of human thoughts, emotions, and introspection. In this book, the author explores the transient nature of our minds and how we relate to our inner dia...
        </p>
        </div>
        <div className="md:w-1/2">
        <Image src="https://i.ibb.co/VvxVgsq/mediamodifier-image.png" alt="Me, My Psyche and I" width="720" height="1080" className="" />
        </div>
     </div>

<Link
href="/books"
className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-normal text-gray-600 rounded-lg group bg-gradient-to-br from-violet-600 to-blue-400 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white text-2xl my-10">
<span
  className="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  View all books
</span>
</Link>
    </section>
  )
}

export default BookSection
