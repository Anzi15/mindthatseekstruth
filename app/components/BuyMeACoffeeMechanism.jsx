"use client"

import { useState } from "react"
import InputField from "./InputField";
import { Input } from "postcss";

const BuyMeACoffeeMechanism = () => {
    const [numberOfCoffee, setNumberOfCoffee] = useState(1);
    const [name, setName] = useState("");
    const [yourMsg, setYourMsg] = useState("");
    
  return (
    <form className='md:w-1/2 p-6 rounded-lg w-full'>
        <h2 className="text-2xl font-bold text-gray-800 py-4">Buy Mehran Dadbeh a coffee</h2>

        <div className="border-[#004aad] border-[1px] rounded-lg py-3 text-5xl w-full px-3 bg-[#004bad25] items-center flex justify-center">
        ☕ <span className="text-3xl text-gray-700 px-4">
        x
        </span>

<div className="flex gap-4">

        {
            [1,3,5].map((number)=>{
                return(

                    <div onClick={()=>{setNumberOfCoffee(number)}} className={`p-4 rounded-full ${numberOfCoffee == number ? "bg-[#004aad] text-white " : "bg-[#FFFFFF]"}  border-[#6cacff] border-[1px] aspect-square w-[5rem] flex items-center transition-all duration-500 justify-center text-3xl `} key={number}>
                    {number}
                </div>
                )
            })
        }

        <div>
            <input type="number" className="aspect-square w-[5rem]  text-3xl text-center rounded-lg" value={numberOfCoffee} onInput={(e)=>{setNumberOfCoffee(e.target.value)}} />
        </div>
</div>

        </div>

            <div className="flex flex-col gap-4 py-4">

           <InputField inputName="name" inputType="text" inputautoComplete={"first name"} requiredInput={"true"} />

           <textarea name="Your message" id="yourmessage" value={yourMsg} onInput={(e)=>{setYourMsg(e.target.value)}} className="border-[2px]"></textarea>
            </div>
    </form>
  )
}

export default BuyMeACoffeeMechanism