import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Card from '../components/Card';

const LetsTalkSection = () => {
  return (
    <section className="w-screen py-4 my-8">
        <div className="text-center p-8 w-full">

        <h2 className="md:text-4xl text-2xl font-bold uppercase my-4">Let's have a discussion</h2>

        <Link href="#" className="text-[#2563EB] hover:text-[#0849d6]  flex gap-2 items-center justify-center font-semibold">
            Learn more about skype consultation
            <FaAngleRight />
        </Link>
        </div>

        <div className="flex w-full gap-4 p-8 flex-col md:flex-row">
        <Card
  image="https://i.ibb.co/NTyhQfy/istockphoto-1407271745-612x612.jpg"
  title="Best meow"
  description="asdfasjhfkajdshf fjasdf asdfjasd kfsadhf ksdhaf ahdfkasdhf kasdhfkasd fksahdfkshadf"
  className="w-1/3"
/>
        <Card
  image="https://i.ibb.co/NTyhQfy/istockphoto-1407271745-612x612.jpg"
  title="Best meow"
  description="asdfasjhfkajdshf fjasdf asdfjasd kfsadhf ksdhaf ahdfkasdhf kasdhfkasd fksahdfkshadf"
  className="w-1/3"

/>
        <Card
  image="https://i.ibb.co/NTyhQfy/istockphoto-1407271745-612x612.jpg"
  title="Best meow"
  description="asdfasjhfkajdshf fjasdf asdfjasd kfsadhf ksdhaf ahdfkasdhf kasdhfkasd fksahdfkshadf"
  className="w-1/3"

/>
        </div>      
    </section>
  )
}

export default LetsTalkSection
