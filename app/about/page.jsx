"use client"
 import Image from 'next/image'
 import OurNumbersSection from '../sections/OurNumbersSection'
 import TestimonialsSection from '../sections/TestimonialsSection'
 import FAQs from '../components/FAQs'

const page = () => {
  return (
    <main>
      <section className="flex w-full md:flex-row flex-col items-center p-6 mg:gap-0 gap-20 justify-between">
        <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="md:text-3xl text-2xl font-bold uppercase">Navigating Minds, Healing Hearts, and Empowering <strong className=" font-extrabold before:bg-blue-200">Success</strong>.</h2>

        <p className="text-gray-700">
        Discover a space where emotional healing meets personal growth, and professional success takes center stage. 
      
        </p>
        </div>
        <div className="md:w-1/2">
            <Image src='/mehran dadbeh about us.gif' width='720' height='720' className='w-full' alt='Mehran Dadbeh | Break up author' priority={true} placeholder="blur" blurDataURL="https:img.freepik.com/free-vector/white-blurred-background_1034-249.jpg" />
        </div>
      </section> 

      <OurNumbersSection />
      <TestimonialsSection/> 

      <section className="px-8 md:w-1/2 mx-auto">
        
<blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>" I discuss emotional breakups, relationship challenges and help my clients to move on after their breakup.
      
    My books cover topics such as Thoughts, consciousness, ego, desire, fear and how they interact with each other and are interrelated. For more information, you can visit my site and read a sample chapter of any of my books."</p>
</blockquote>
<h3 className="italic text-xl font-semibold text-gray-700 py-4"> - Mehran Dadbeh</h3>
      </section>
      <FAQs /> 
    </main>
  )
}

export default page
