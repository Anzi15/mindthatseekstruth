import Image from "next/image";
import Link from "next/link";
import React from "react";
import CtaBtn from "../components/CtaBtn";

const MindsetBookSection = () => {
  return (
    <section className="w-full flex my-10 items-center justify-between flex-col-reverse md:flex-row p-4 ">
      <div className="md:w-1/2 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl cursor-brain">
          Our best selling <br /> <strong>The Mindset </strong>
        </h1>
        <h2 className="text-lg text-center text-gray-500 px-6">
          A journey into clarity, resilience, and personal growth, offering
          actionable insights and strategies to transform your perspective and
          empower your path to success.
        </h2>

        <CtaBtn text={"Upgrade your mindset"} redirect={"books/the-mindset"} />
      </div>
      <div className="md:w-1/2 py-10 ">
        <Image
          src="https://i.ibb.co/dKSJNgp/Dadbeh-print-Pdf.jpg"
          width="1080"
          height="1080"
          className="skeleton-loading rounded-tr-[3rem] rounded-bl-[3rem] hover:rounded-br-[3rem] hover:rounded-tl-[3rem]
            hover:rounded-bl-none hover:rounded-tr-none transition-all shadow-sm shadow-black"
          alt="Break up cure | Mehran Dadbeh"
        />
      </div>
    </section>
  );
};

export default MindsetBookSection;
