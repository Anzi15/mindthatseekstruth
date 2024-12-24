import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaQuestion } from "react-icons/fa6";

const AskQuestionIntro = () => {
  return (
    <section className="w-full flex items-center flex-col-reverse md:flex-row">
      <div className="md:w-1/2">
    <Image draggable="false" src="https://i.ibb.co/BTRj9Mx/1-1-Z4-VKDOK98qd-V9-Ut4l-Jhp-A.jpg" width="720" height="720" className="skeleton-loading" alt="Don't know, why she(or he) did this? get answer to all of your whys." />
      </div>
      <div className="md:w-1/2 md:p-8 my-20 px-8 gap-16">
      <h2 className="md:text-4xl text-2xl font-bold uppercase my-10">Get Answers to all of your <strong className="before:bg-yellow-400">"Why"s</strong>.</h2>
      <Link href="/ask-question" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg my-9">
  Get Answers to your questions
</Link>
      </div>
    </section>
  )
}

export default AskQuestionIntro
