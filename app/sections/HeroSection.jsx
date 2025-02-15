import { Section } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="flex w-screen py-4 relative aspect-[9/4] justify-start items-center md:flex-row flex-col relative" >
      {/* <div className=' z-10 flex-col text-left gap-4 md:pl-10'>

      <p className='font-bold text-lg text-black py-3'>
      Life . Relationships & The Psyche
      </p>
      <h1 className='text-6xl font-extrabold text-left'>
        Mehran Dadbeh 
      </h1>
      <p className='pb-6'>
        Author
      </p>
      <div className='flex flex-wrap gap-3'>
      <Link href="/ask-question" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
  Skype Consultation
</Link>

<Link href="/books" className="px-8 py-4 bg-gradient-to-r bg-white text-black font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
    Our Books
</Link>
      </div>
      </div>
      <div className=''>

      <Image src="/Mehran_dadbeh_hero-cover.webp" width="1080" height="720" className="w-full skeleton-loading absolute inset-0" alt="Break Up Cure | Break consultation" loading='eager'/>
      </div> */}
      <div className="flex md:w-1/2 flex-col px-4 gap-4 md:py-0 py-6">
        <div className='bg-cyan-600 text-md text-left rounded-md px-4 py-2 w-fit text-white'>
        Break ups, Relationships, OCD & HOCD Are Specialty Topics of Discussion Here
        </div>
        <h3>
          Mehran Dadbeh
        </h3>
        <h1 className='md:text-5xl text-3xl font-black text-left'>
        Guiding You Toward Clarity, Confidence, and Better Relationships
        </h1>

        <p className='text-gray-500'>
        Mehran offers personalized support and expert guidance to help individuals overcome intrusive thoughts, manage OCD, and navigate complex relationship challenges. With a compassionate approach, he empowers clients to regain control and build fulfilling lives.
        </p>

        <div className="flex py-4 gap-6">
          <Link href={"/consultation"} className='bg-blue-600 text-white py-3 px-4 rounded-md flex gap-2 hover:gap-4 transition-all items-center justify-center'>
            Book Consultation

            <FaArrowRight />
          </Link>
          <Link href={"/books"} className=' text-blue-600 py-3 px-4 rounded-md border-2 border-blue-600 flex gap-2 hover:gap-4 transition-all items-center justify-center'>
            View books

            <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="flex md:w-1/2 items-start">
        <Image  src='/mehran in ball with chat transparetn.webp' width='720' height='720' className='w-full select-none' alt='Mehran Dadbeh | HOCD / OCD Consulation / Break up cure' draggable="false" priority={true} />
      </div>

    </section>
  )
}

export default HeroSection
