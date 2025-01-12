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

      <section className='flex w-full md:py-28 py-10 flex-col items-center p-6 mg:gap-0 gap-20 justify-between'>
      <h2 className="md:text-3xl text-2xl font-bold uppercase">About <strong className=" font-extrabold before:bg-red-200">Mehran</strong>.</h2>
      
      
      <div className='flex w-full md:flex-row flex-col md:p-6 gap-6'>
    <div className='md:w-1/2 flex flex-col gap-6'>
    <p className=' text-gray-600'>
        Mehran Dadbeh brings a uniquely powerful perspective to understanding and treating Obsessive-Compulsive Disorder (OCD), combining deeply personal experience with extensive research into neuroscience, philosophy of consciousness, and behavioral psychology. His journey with OCD began in childhood, experiencing various manifestations of the condition firsthand—from repetitive hand-washing to complex thought patterns. Rather than letting these challenges define him, Mehran used his analytical mind, honed through chess and puzzle-solving, to transform his experience into a comprehensive understanding of OCD and its subsets.
        What sets Mehran's approach apart is his revolutionary perspective on consciousness and its relationship to OCD. 
        </p>

        <p className=' text-gray-600'>
        Through extensive study of leading minds in neuroscience and philosophy—including Dr. Jeffrey Schwartz, Dr. Roger Wolcott Sperry, Dr. Wilder Penfield, Dr. Adrian Owen, and Dr. Benjamin Libet—he has developed a unique framework for understanding OCD that emphasizes the distinction between awareness and brain function.
        </p>

        <p className=' text-gray-600'>
        His work is particularly influenced by the philosophical insights of Jiddu Krishnamurti, integrated with cutting-edge neurological research.
Mehran's core teaching centers on a transformative insight: that human consciousness and awareness exist independently of thought patterns and brain activity. He helps individuals understand that OCD, HOCD, and intrusive thoughts are not personal failures but rather temporary glitches in brain function that can be addressed through neuroplasticity and conscious awareness. His approach emphasizes that we are not our thoughts, but rather the awareness that observes them.

        </p>
    </div>

        <div className="md:w-1/2 group overflow-hidden rounded-2xl hover:shadow-lg">
          <Image src={"https://i.ibb.co/ZXBRCy7/IMG-20250111-WA0040.jpg"} alt="Mind that seeks truth | HOCD OCD" width={1080} height={1080} className='select-none rounded-2xl group-hover:scale-105 transition-all skeleton-loading saturate-100 group-hover:saturate-150 ' draggable="false" />
        </div>
      </div>
      </section>


      <section>
        
      </section>


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
