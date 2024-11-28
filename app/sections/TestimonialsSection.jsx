"use client"
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel.jsx";

export default function TestimonialsSection({ testimonials = [
    {
      quote: "I do not have enough kind words to express my gratitude and admiration for Mehran Dadbeh’s work and what he did for me.",
      author: "Dr. Julia T.",
      location: "Germany"
    },
    {
      quote: "He is a Guardian Angel on earth, who brings comfort and help to many broken hearts and souls.",
      author: "Maggie D.",
      location: "Florida, USA"
    },
    {
      quote: "He radiates a very special kind of serenity and kindness. He helped me to see my situation in a different light, from a greater distance.",
      author: "Lynn",
      location: "Germany"
    },
    {
      quote: "Mehran D. broke down the reasons why I felt those emotions. That was my first step to happiness because he hit the nail on the head.",
      author: "Djuana F.",
      age: 25,
      location: "Jamaica"
    },
    {
      quote: "NEVER had anyone analyzed my problem in the manner he approached it. God comes to earth in various forms. Mr. Dadbeh, for me, was God sent – to put my life back on track, so I can enjoy all its beauty!",
      author: "Dr. Sue S.",
      profession: "GP",
      location: "USA"
    },
    {
      quote: "Mr. Mehran is a man I am eternally indebted to. He kindly and patiently reinforces the truth.",
      author: "Abdul",
      location: "Manchester, England"
    },
    {
      quote: "If it weren’t for you I would probably have committed suicide. Mr. Mehran, God bless you.",
      author: "Vlad C.",
      location: "United Kingdom"
    },
    {
      quote: "I am so grateful to get a chance to talk with you. I had a feeling that I am talking to my older brother who gave me the best advices in these difficult moments. Thank you Mehran.",
      author: "Dani",
      location: "Sweden"
    },
    {
      quote: "I am so grateful that you exist. I am so grateful that you are doing what you are doing. I don’t know what I would have done without you. Listening to your advice is a balsam for my soul. I have tears of gratitude in my eyes. You have made me come back on my feet from the deepest shit of my life. I look forward to Skyping with you again.",
      author: "Sid G.",
      location: "Estonia"
    }
  ]  
}) {
  return (
    <>
      <section className="w-full max-w-[98vw] py-4 cursor-grab md:my-20 items-center mt-8 ">
      <h2 className="md:text-4xl text-2xl font-bold uppercase my-4 text-center">Our Clients<strong className="before:bg-red-400"> love </strong>‎ us</h2>
        <div className="mx-auto lg:max-w-6xl px-3  ">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col px-4 md:py-5 sm:p-6 items-center">
                    <div className="flex my-4">⭐⭐⭐⭐⭐</div>
                    <q className="flex-1 text-gray-600 dark:text-gray-300">
                      {testimonial.quote}
                    </q>
                    <div className="mt-6 flex gap-3">
                      <span className="inline-flex rounded-full">
                        
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {testimonial.author} ‎
                          <span className="text-gray-500 text-sm">
                            <br />
                            
                              from {testimonial.location}
                            </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>
        </div>
      </section>
    </>
  );
}