"use client";

import { useState } from "react";
import InputField from "./InputField";
import { Input } from "postcss";
import PayPalButton from "./PayPalButton";
import { generateCoffeeHtml } from "./EmailEbookSender";
import { toast } from "react-toastify";

const BuyMeACoffeeMechanism = () => {
  const [numberOfCoffee, setNumberOfCoffee] = useState(1);
  const [name, setName] = useState("");
  const [yourMsg, setYourMsg] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [shouldAskToPay, setShouldAskToPay] = useState(false)

  const items = [
    {
      name: "Coffee",
      quantity: numberOfCoffee,
      unit_amount: {
        currency_code: "USD",
        value: 10,
      },
    },
  ]
  const total = items.reduce(
    (acc, item) => acc + parseFloat(item.unit_amount.value) * item.quantity,
    0
  );

  const handlePostSubmit = async (e)=>{
       try {
           toast.success("Thank you so much!! your support truly matters")
          } catch (error) {
            console.error('Error:', error);
            toast.error("Something went wrong, but don't worry we will deliver your order manually, you can even reach out to us on contact us page.")
          } finally {
            setShouldAskToPay(false);
   
          }
  }
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShouldAskToPay(true);
    }

  return (
    <form className="md:w-1/2 p-6 rounded-lg w-full m-auto" id="send" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 py-4 text-center">
        Buy Mehran Dadbeh a coffee
      </h2>

      <div className="border-[#004aad] border-[1px] rounded-lg py-3 sm:text-2xl text-xl w-full px-2 md:px-3 bg-[#004bad25] items-center flex justify-center m-auto ">
        <div className="flex md:gap-4 gap-2 items-center">
        ☕ <span className="md:text-3xl text-2xl text-gray-700 px-4 flex items-center">x</span>
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
                }  border-[#6cacff] cursor-pointer border-[1px]  w-[14%] flex items-center transition-all duration-500 justify-center text-xl md:text-2xl `}
                key={number}
              >
                {number}
              </div>
            );
          })}

          <div className="flex sm:w-[25%] w-[35%] aspect-square max-w-[4rem]">
            <input
              type="number"
              className="h-full   md:p-0 text-xl text-center rounded-lg w-full"
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
          inputName="Name"
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


      </div>


      {shouldAskToPay && (
                    <section className="w-screen h-screen fixed inset-0 z-20  bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex items-center justify-center">
                      <div className="md:w-1/2 w-full p-4">
                        <PayPalButton
                          items={items}
                          totalAmount={total}
                          onSuccess={handlePostSubmit}
                        />
                      </div>
                    </section>
                  )}

      <button className="w-full text-center bg-[#004aad] py-4 rounded-lg text-white font-semibold" type="submit">
        Support ${numberOfCoffee * 10}
      </button>
    </form>
  );
};

export default BuyMeACoffeeMechanism;
