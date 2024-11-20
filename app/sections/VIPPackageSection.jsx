import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VIPPackageSection = () => {
  return (
    <section className="w-full flex my-10 items-center flex-col md:flex-row p-4 ">
        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
       <h1 className="text-4xl">The Ultimate <strong>Break Up Cure  </strong></h1>
       <h2 className="text-2xl text-gray-500">
       & VIP Support Package
       </h2>

       <Link href="/vip-bundle" className="cta-btn">
       Get the ultimate Package
       </Link>
        </div>
        <div className="w-1/2 ">
            <Image src="/Mehran_dadbeh-standing.webp" width="1080" height="1080" className="rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-br-[3rem] hover:rounded-tl-[3rem]
            hover:rounded-bl-none hover:rounded-tr-none transition-all shadow-sm shadow-black" alt="Break up cure | Mehran Dadbeh" />
        </div>
    </section>
  )
}

export default VIPPackageSection
