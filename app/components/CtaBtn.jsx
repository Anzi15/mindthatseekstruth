import React from 'react'
import Link from 'next/link'

const CtaBtn = ({text, redirect}) => {
  return (
    <div>
      <Link href={`/${redirect}`} className="cta-btn flex bg-blue-500 text-white font-bold text-lg p-4 m-4 gap-4 hover:gap-6 transition-all rounded-xl">
       {text}

<div className="border-white rounded-full border-2 ">

        <img src="https://i.ibb.co/tcZ32S8/icons8-right-100-1.png" alt="" className="w-6" />
</div>

       </Link>
    </div>
  )
}

export default CtaBtn
