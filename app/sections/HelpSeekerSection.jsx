import { Section } from 'lucide-react'
import React from 'react'

const HelpSeekerSection = () => {
  return (
    <section className="w-screen py-4">
      <div className="text-center p-4">
        <h2 className="md:text-3xl text-2xl font-bold uppercase">Dealing with the pains of <span className="cool-underline-blue text-red-600 font-extrabold">Break up</span>?</h2>
        <h3 className="md:text-2xl text-gray-600">You're not alone, we are here to help you out.</h3>
      </div>
      <div className='p-4'>
      <iframe
className="w-full aspect-video"
  src="https://www.youtube.com/embed/C6qkJgLDxiI?si=0G_LDxXEi9xNobhl"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      </div>
    </section>
  )
}

export default HelpSeekerSection
