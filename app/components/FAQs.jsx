import React, { useState } from 'react';

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/">
            <img
              src="https://i.ibb.co/Bfnpmnh/mateusz-bajdak-cxixrc-U1-HAg-unsplash-1.jpg"
              alt="FAQ tailwind section"
              draggable={false}
            onContextMenu={(e)=>{e.preventDefault()}}
              className="skeleton-loading max-h-[80vw] aspect-[9/16] w-full rounded-xl select-none object-cover"
            />
          </div>
          <div className="w-full">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="text-lg text-center font-medium text-brandRed mb-2 lg:text-left text-gray-600">
                  FAQs
                </h6>
                <h2 className="md:text-4xl text-2xl font-bold uppercase  text-left">Looking for<strong className="before:bg-yellow-300"> Answers </strong>‎?</h2>
              </div>
              <div className="accordion-group text-left">
                {[
  {
    "question": "What is Mind That Seeks Truth?",
    "answer": "Mind That Seeks Truth is a platform created by Mehran Dadbeh that offers support and guidance for individuals dealing with emotional and psychological challenges, particularly related to breakups and personal growth."
  },
  {
    "question": "Who is Mehran Dadbeh?",
    "answer": "Mehran Dadbeh is the author and creator behind Mind That Seeks Truth. He provides consultations and books aimed at helping individuals understand and overcome their emotional struggles."
  },
  {
    "question": "What services does Mind That Seeks Truth offer?",
    "answer": "Mind That Seeks Truth offers various services including Skype consultations and books such as 'Me, My Psyche & I,' 'Transient Thoughts And Me,' and 'The Break-Up Pain Handbook.'"
  },
  {
    "question": "How can I contact Mehran Dadbeh for a consultation?",
    "answer": "You can contact Mehran Dadbeh for a consultation through Skype. He offers both group sessions and one-on-one sessions where he provides personalized support and guidance."
  },
  {
    "question": "Are there any books available for purchase?",
    "answer": "Yes, Mind That Seeks Truth offers several books for purchase, both in paper and e-book formats. Some popular titles include 'Me, My Psyche & I,' 'Transient Thoughts And Me,' and 'The Break-Up Pain Handbook.'"
  },
  {
    "question": "Can I ask questions directly to Mehran Dadbeh without booking a consultation?",
    "answer": "Yes, you can send your questions via email for a nominal fee, and Mehran Dadbeh will respond in writing or through a recording message."
  },
  {
    "question": "What do people say about Mind That Seeks Truth?",
    "answer": "Many users have shared positive testimonials about their experiences with Mind That Seeks Truth, praising Mehran Dadbeh for his insightful and compassionate approach to helping them overcome emotional challenges."
  }
]
.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion py-8 border-b border-solid border-gray-200 ${activeAccordion === index ? 'active' : ''}`}
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between md:text-xl text-lg font-normal leading-8  w-full transition duration-500 hover:text-brandRed accordion-active:text-indigo-600 accordion-active:font-medium focus-within::text-brandRed"
                      onClick={() => toggleAccordion(index)}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <h5 className="text-left text-gray-800">{item.question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-brandRed accordion-active:text-indigo-600 ${activeAccordion === index ? 'rotate-180' : ''}`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={`accordion-content-${index}`}
                      className={`accordion-content w-full px-0 text-gray-600 overflow-hidden text-left pr-4 ${activeAccordion === index ? 'max-h-40' : 'max-h-0'}`}
                      aria-labelledby={`accordion-heading-${index}`}
                    >
                      <p className="text-base text-gray-500 font-normal">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;