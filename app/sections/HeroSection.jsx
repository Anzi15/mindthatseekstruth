import { Section } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="flex w-screen py-4 relative aspect-[9/4] justify-start items-center md:flex-row flex-col" >
      <div className=' z-10 flex-col text-left gap-4 md:pl-10'>

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
      </div>
    </section>
  )
}

export default HeroSection
