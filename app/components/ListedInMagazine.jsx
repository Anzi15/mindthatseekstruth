import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListedInMagazine = () => {
  return (
    <section className='p-4'>
      <h3 className='md:text-4xl text-center text-2xl font-bold uppercase my-10'>
      Hailee Walker's interview on Heartbreak with 
        <strong className='className="before:bg-pink-500"'>
        ‎ Mehran Dadbeh ‎ 
        </strong>
        
      </h3>
      <div className='flex md:flex-row flex-col items-center'>

    <div className='md:w-1/2 p-4'>
    <h3 className='text-2xl font-bold'>
      Hailee Walker is a relationship counselor who write articles for the "The Big Smoke"
    </h3>
      <p className='text-gray-800 py-4 text-lg'>
        <b>
        Hailee:
        </b>
         "If you could offer one piece of advice to people who are struggling
        with heartbreak what would it be?"
      </p>
      <p className='text-gray-800 py-4 text-lg'>
        <b>
        Mehran: 
        </b>
         "It is not the end of the world, life
can not be summed up in one woman/ man or one relationship,
life has lot more to offer than you can imagine let alone one
partner who does not want you! "
      </p>

<div className='py-10'>

      <Link href="/hailees-interview-with-mehran-dadbeh" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
  Read whole interview
</Link>
</div>
    </div>  
    <div className='md:w-1/2 p-4'>
        <Image src='/red-shirt-mehran.webp' width='720' height='720' className='w-full rounded-lg' alt='break up cure | ' />
    </div>
      </div>
    </section>
  )
}

export default ListedInMagazine
