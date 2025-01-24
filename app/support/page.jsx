    import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BuyMeACoffeeMechanism from '../components/BuyMeACoffeeMechanism'
    
    const page = () => {
      return (
        <section>
            <div className='w-full bg-[#004aad] p-4 md:flex items-center'>
                <div className='md:w-1/2'>
                    <h2 className='md:text-5xl text-4xl font-extrabold text-white'>
                    Support Mehran Dadbeh’s Legacy of Impact
                    </h2>
                    <p className='pb-14 pt-4 text-white italic'>
                    Your support continues the work that has already touched lives.
                    </p>
                    <Link href={"#send"} className='px-6 my-8 py-3 bg-white rounded-full text-xl  font-bold text-[#004aad]'>
                    Be Part of the Impact
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <Image src='/blue-paper-mehran.webp' width='720' height='720' className='w-full select-none' alt='' draggable={false} />
                </div>
            </div>
            <div className='md:flex m-auto'>
                <div className='md:w-1/3 aspect-square bg-[#093c33] relative items-center md:items-end flex justify-start'>
                <Image src='https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width='720' height='720' className='w-full absolute inset-0 opacity-10 select-none z-0' alt='HOCD OCD AND ITS SUB SETS' draggable={false}/>
                <div className='p-6'>

                <h1 className='z-20 text-start text-3xl text-white font-bold '>HOCD, OCD & it's subsets</h1>
                <p className='text-white'>Free resources to help you with HOCD, OCD & it's subsets.</p>
                </div>
                </div>
                <div className='md:w-1/3 aspect-square bg-[#7a640b] relative items-center md:items-end flex justify-start'>
                <Image src='https://images.unsplash.com/photo-1675552560875-59a0f0a8ec59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width='720' height='720' className='w-full absolute inset-0 aspect-square object-cover opacity-10 select-none z-0' alt='Relationships and break ups aspect-square object-cover' draggable={false}/>
                <div className='p-6'>

                <h1 className='z-20 text-start text-3xl text-white font-bold '>Relationships and break ups</h1>
                <p className='text-white'>Has always helped with dealing with the pains of break ups.</p>
                </div>
                </div>
                <div className='md:w-1/3 aspect-square bg-[#7f301e] relative items-center md:items-end flex justify-start overflow-hidden'>
                <Image src='https://plus.unsplash.com/premium_photo-1692504791832-b66fa54ad6b9?q=80&w=1318&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width='720' height='720' className='w-full absolute inset-0 opacity-10 select-none z-0' alt='Intrusive thoughts' draggable={false}/>
                <div className='p-6'>

                <h1 className='z-20 text-start text-3xl text-white font-bold '>Intrusive & unwanted thoughts 
                </h1>
                <p className='text-white'>Always been there for the people when they need someone to help them clear their minds.</p>
                </div>
                </div>
            </div>
            <div className='py-10'>
                <h2 className='text-4xl font-extrabold text-center uppercase'>
                    Support mehran's work
                </h2>

                <BuyMeACoffeeMechanism id="send" />
               


            </div>
        </section>
      )
    }
    
    export default page