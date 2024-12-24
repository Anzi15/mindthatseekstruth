import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen'>
        < Image src="/mojtaba-mohammadi-yioTsD3fLkA-unsplash.jpg" width={720} height={420} className='skeleton-loading w-full'/>
      <section className='w-full'>
      </section>
      <h2 className="md:text-4xl text-2xl font-bold uppercase my-4">Let's have a discussion about <strong className="before:bg-pink-400">You</strong></h2>
    </div>
  )
}

export default page
