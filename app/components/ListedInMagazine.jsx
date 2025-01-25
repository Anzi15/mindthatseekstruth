import Image from 'next/image'
import React from 'react'

const ListedInMagazine = () => {
  return (
    <section className='p-4'>
      <h3 className='md:text-4xl text-center text-2xl font-bold uppercase my-10'>
        As Mentioned In  
        <strong className='className="before:bg-pink-500"'>
        ‎ The Big Smoke  ‎ 
        </strong>
         by Hailee Walker 
      </h3>
      <div className='flex md:flex-row flex-col items-center'>

    <div className='md:w-1/2 p-4'>
      <p className='text-gray-800 py-4 text-lg'>
        <b>
        Host:
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
    </div>  
    <div className='md:w-1/2 p-4'>
        <Image src='/red-shirt-mehran.webp' width='720' height='720' className='w-full' alt='break up cure | ' />
    </div>
      </div>
    </section>
  )
}

export default ListedInMagazine
