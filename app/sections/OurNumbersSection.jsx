import { Section } from 'lucide-react'
import React from 'react'

import AnimateNumbers from '../components/AnimatedNumbers'
const OurNumbersSection = () => {
  return (
    <section className=" w-full flex md:flex-row flex-col md:justify-center md:items-start items-center gap-20 p-8 bg-blue-800 min-h-[10rem]">
        <div className="">

      <h2 className="text-white text-3xl flex text-center">
      <AnimateNumbers number={2380} className={'text-white text-3xl'} /> 
      </h2>
      <h3 className="text-gray-400 text-2xl">
      Books sold
      </h3>
        </div>
        <div className="">

      <h2 className="text-white text-3xl flex justify-center">
      <AnimateNumbers number={58000} className={'text-white text-3xl w-fit'} />
      </h2>
      <h3 className="text-gray-400 text-2xl">
      Consultation Minutes
      </h3>
        </div>
        <div className="">

      <h2 className="text-white text-3xl flex">
      <AnimateNumbers number={528} className={'text-white text-3xl'} />
      </h2>
      <h3 className="text-gray-400 text-2xl">
      Video Packages Sold
      </h3>
        </div>
        <div className="">

      <h2 className="text-white text-3xl flex">
      <AnimateNumbers number={1550} className={'text-white text-3xl'} />
      </h2>
      <h3 className="text-gray-400 text-2xl">
      Questions Answered
      </h3>
        </div>
    </section>
  )
}

export default OurNumbersSection
