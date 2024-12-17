"use client"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import InputField from '../components/InputField';
import { useState } from 'react';

export default function AskQuestionPage() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [question, setQuestion] = useState("")
    return (
    <main>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-blue-500">Ask your question</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-left text-gray-900 sm:text-5xl">
                Get expert guidance for life’s challenges
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Expert guidance illustration"
            src="https://i.ibb.co/KmF6HyC/tanja-cotoaga-oj-LZ1-Zfghlg-unsplash-1.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-gray-700 lg:max-w-lg">
              <p>
                Get personalized answers from a trusted expert. Whether you're battling intrusive thoughts or navigating
                complex relationships, we’re here to help you find clarity.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                  <span>
                    <strong className="font-semibold text-gray-900">Easy and secure.</strong> Submit your question
                    quickly and confidently with secure payment options.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                  <span>
                    <strong className="font-semibold text-gray-900">Privacy guaranteed.</strong> Your concerns are
                    handled with utmost confidentiality and care.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                  <span>
                    <strong className="font-semibold text-gray-900">Expert advice.</strong> Receive detailed answers
                    from a professional with experience in mental health and relationships.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                No matter your question, you’re not alone. Get the support you need today to move forward with
                confidence and peace of mind.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
              <p className="mt-6">
                Submit your question, complete the secure payment, and receive a detailed response from Mehran
                Dadbeh. Every step is designed to provide clarity and assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='w-full justify-center items-center'>
        <div className='my-4'>
    <h2 className="md:text-4xl text-2xl font-bold uppercase  text-center">Empty your <strong className="before:bg-blue-400">mind</strong></h2>
    <p className='text-center text-xl    text-gray-500'>Feel free to ask me anything</p>

    <form className='md:w-[50%] mx-auto my-10 gap-3 flex flex-col'>
    <InputField
                inputAutoComplete={"email"}
                inputName={"Email"}
                valueReturner={setEmail}
                inputValue={email}
                requiredInput={true}
                className="w-1/2"
              />
    <InputField
                inputAutoComplete={"name"}
                inputName={"Name"}
                valueReturner={setName}
                inputValue={name}
                requiredInput={true}
                className="w-1/2"
              />
    <InputField
                inputAutoComplete={"gender"}
                inputName={"Gender"}
                valueReturner={setGender}
                inputValue={gender}
                requiredInput={true}
                className="w-1/2"
              />
              <textarea value={question} onInput={setQuestion}></textarea>
    </form>

        </div>

    </section>
    </main>
  );
}
