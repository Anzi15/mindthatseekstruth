"use client";

import { useState } from "react";
import InputField from "./InputField";
import { Input } from "postcss";

const BuyMeACoffeeMechanism = () => {
  const [numberOfCoffee, setNumberOfCoffee] = useState(1);
  const [name, setName] = useState("");
  const [yourMsg, setYourMsg] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <form className="md:w-1/2 p-6 rounded-lg w-full" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 py-4">
        Buy Mehran Dadbeh a coffee
      </h2>

      <div className="border-[#004aad] border-[1px] rounded-lg py-3 text-5xl w-full px-3 bg-[#004bad25] items-center flex justify-center">
        ☕ <span className="text-3xl text-gray-700 px-4">x</span>
        <div className="flex gap-4">
          {[1, 3, 5].map((number) => {
            return (
              <div
                onClick={() => {
                  setNumberOfCoffee(number);
                }}
                className={`p-4 rounded-full ${
                  numberOfCoffee == number
                    ? "bg-[#004aad] text-white "
                    : "bg-[#FFFFFF]"
                }  border-[#6cacff] border-[1px] aspect-square w-[5rem] flex items-center transition-all duration-500 justify-center text-3xl `}
                key={number}
              >
                {number}
              </div>
            );
          })}

          <div>
            <input
              type="number"
              className="aspect-square w-[5rem]  text-3xl text-center rounded-lg"
              value={numberOfCoffee}
              onInput={(e) => {
                setNumberOfCoffee(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <InputField
          inputName="name"
          inputType="text"
          inputautoComplete={"first name"}
          requiredInput={"true"}
          inputValue={name}
          valueReturner={setName}
        />

        <textarea
          name="Your message"
          id="yourmessage"
          value={yourMsg}
          onInput={(e) => {
            setYourMsg(e.target.value);
          }}
          placeholder="Your message to mehran (optional)"
          className="border-[2px] p-4 min-h-[10rem] max-h-[20rem]"
        ></textarea>

<div className="flex items-center py-4 px-2">
  <input
    id="checked-checkbox"
    type="checkbox"
    onChange={(e) => {
        setIsMonthly(e.target.checked)
    }}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="checked-checkbox"
    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Make it monthly
  </label>
</div>

      </div>

      <button className="w-full text-center bg-[#004aad] py-4 rounded-lg text-white font-semibold" type="submit">
        Support ${numberOfCoffee * 10}
      </button>
    </form>
  );
};

export default BuyMeACoffeeMechanism;
