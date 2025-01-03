import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ConsultationPricing from '../components/ConsultationPricing'

const page = () => {
  return (
    <div className='w-screen relative'>
      <Link href={"#pricing"}>
        < Image src="/dlsakflsajkdf.png" width={1080} height={1080} className='skeleton-loading w-full inset-0 select-none' alt='Break up consultation' draggable="false" />
      </Link>
      <section className='flex flex-col my-10 justify-center items-center w-full p-6'>
      <h2 className="md:text-4xl text-2xl font-bold uppercase my-4 text-center">Let's have a discussion about <strong className="before:bg-blue-400">You</strong></h2>
      <p className='text-center text-2xl text-gray-600'>An example of how our ultimate discussion would look like:</p>
      <div className='p-4 w-full'>
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
      <ConsultationPricing/>
    </div>
  )
}

export default page
