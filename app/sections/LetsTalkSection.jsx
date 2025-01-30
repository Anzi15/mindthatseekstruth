import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Card from '../components/Card';

const LetsTalkSection = () => {
  return (
    <section className="w-screen py-4 my-8">
        <div className="text-center p-8 w-full">

        <h2 className="md:text-4xl text-2xl font-bold uppercase my-4">Let's have a discussion about <strong className="before:bg-pink-400">You</strong></h2>

        <Link href="/consultation" className="text-[#2563EB] hover:text-[#0849d6]  flex gap-2 items-center justify-center font-semibold">
            Learn more about skype consultation
            <FaAngleRight />
        </Link>
        </div>

        <div className="grid w-full gap-4 p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <Card
    image="https://i.ibb.co/NY8mrc3/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVsb2-Zma-WNl-MTBfc-Ghvd-G9fb2-Zf.webp"
    title="Feeling Lost?"
    description="Receive personalized support from experienced professionals who understand your challenges and are dedicated to helping you overcome them."
    className="w-full"
  />
  <Card
    image="/control.webp"
    title="Reclaim Control (OCD/HOCD)"
    description="Learn practical strategies and techniques tailored to manage and reduce anxiety, break intrusive thought patterns, and build confidence."
    className="w-full"
  />
  <Card
    image="https://i.ibb.co/QMfmMhZ/pexels-tomas-anunziata-129267-3876440.jpg"
    title="Path to Peace"
    description="Embrace a healthier, more balanced mindset with solutions designed to empower you for long-term mental health success."
    className="w-full"
  />
</div>
      
    </section>
  )
}

export default LetsTalkSection
