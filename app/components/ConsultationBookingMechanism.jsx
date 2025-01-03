"use client"

import { useState } from "react"
import InputField from "./InputField"

const ConsultationBookingMechanism = () => {
    const [name, setName] = useState(""); 
    const [skypeId, setSkypeId] = useState(""); 
    // const [name, setName] = useState(""); 
  return (
    <form className="py-4 w-full flex flex-col gap-4">
        <InputField inputName="Full Name" inputType="text" inputValue={name} inputautoComplete={"name"} requiredInput={true} valueReturner={setName} />
        <InputField inputName="Skype ID" inputType="text" inputValue={skypeId} inputautoComplete={"skype"} requiredInput={true} valueReturner={setSkypeId} />
        
    </form>
  )
}

export default ConsultationBookingMechanism
