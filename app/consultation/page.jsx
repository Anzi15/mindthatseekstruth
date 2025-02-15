import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ConsultationPricing from '../components/ConsultationPricing'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

const page = () => {
  return (
    <main className='w-screen relative'>
      <section className='w-full md:flex bg-blue-50 items-center justify-start md:min-h-[80vh]'>
        <div className='flex md:w-1/2 md:p-6 py-8 px-4 flex-col'>
        <h2 className='md:text-4xl text-2xl font-extrabold text-[#023047]'>
        Find Clarity, Overcome Challenges, and Strengthen Relationships
        </h2>

        <div className='grid gap-3 flex-col items-start justify-start grid-cols-2 py-4 md:py-8'>
          {["HOCD and OCD Management","Relationship Guidance","Intrusive Thought Understanding Strategies","1-on-1 Guidance"].map((feature, index)=>{
            return (
            <div className='flex' key={index}>
                <div className='flex aspect-square rounded-full text-white p-2 bg-[#00b4d8] w-7 justify-center h-7 items-center'>
                <FaCheck />
                </div>
                <p className='px-4'>
                  {feature}
                  </p>
            </div>
            )
          })}
        </div>
        <div className='flex gap-4 '> 
        <Link href={"#pricing"} className='bg-blue-600 text-white py-3 px-4 rounded-md flex gap-2 hover:gap-4 transition-all items-center justify-center'>
        Pricing

            <FaArrowRight />
          </Link>
          <Link href={"#demo"} className=' text-blue-600 py-3 px-4 rounded-md border-2 border-blue-600 flex gap-2 hover:gap-4 transition-all items-center justify-center'>
            View demo

            <FaArrowRight />
          </Link>
        </div>
        </div>

          <div className="flex h-full  md:w-1/2 items-end mt-auto">
                  <Image src='/mehran-siting-on-hand.webp' width='720' height='720' className='w-full select-none'  alt='Mehran Dadbeh | HOCD / OCD Consulation / Break up cure' priority={true} draggable="false"  />
                </div>

      </section>



      <section className='flex flex-col my-10 justify-center items-center w-full p-6'>
      <h2 className="md:text-4xl text-2xl font-bold uppercase my-4 text-center">Let's have a discussion about <strong className="before:bg-blue-400">You</strong></h2>
      <p className='text-center text-2xl text-gray-600'>An example of how our ultimate discussion would look like:</p>
      <div className='p-4 w-full' id='demo'>
      <iframe
className="w-full aspect-video"
  src="https://www.youtube.com/embed/SoS0dXr2h8Y?si=_Q-TB2ktMsu0pBVG"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      </div>
      </section>
      <ConsultationPricing />
    </main>
  )
}

export default page
