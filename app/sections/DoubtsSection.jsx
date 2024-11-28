import React from 'react'
import Link from 'next/link'

const DoubtsSection = () => {
  return (
    <section className="flex md:p-20 p-10 items-center justify-center gap-10 flex-col md:flex-row">
       <h2 className="md:text-4xl text-2xl font-bold uppercase my-10">Got questions? Let’s clear them up—</h2> <div>
       <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg my-9">
  Contact us now
</Link>
       </div>
    </section>
  )
}

export default DoubtsSection
