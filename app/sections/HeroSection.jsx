import { Section } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex w-screen py-4 relative" >
      <Image src="/Mehran_dadbeh_hero-cover.webp" width="1080" height="720" className="w-full inset-0" alt="Break Up Cure | Break consultation"/>
    </section>
  )
}

export default HeroSection
