"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../images/vertical-photo-a-young-s.png"

export default function TestimonialSectionWithRealImage() {
  const testimonials = [
    {
      id: 1,
      name: "Sachin Tendulkar",
      title: "Marketing Manager",
      quote:
        "Hear what real hosts have to say about how our platform has transformed their rental business and helped them grow their business.",
      image: image,
    },
    
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20 relative">
      <div className="relative bg-white rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 text-[#8CBFBA] text-[80px] md:text-[120px] leading-none z-10">&ldquo;</div>
        <div className="absolute bottom-0 right-0 text-[#8CBFBA] text-[80px] md:text-[120px] leading-none z-10">&rdquo;</div>

        <div className="flex flex-col md:flex-row items-center p-6 md:p-12 gap-6 md:gap-12">
          <div className="w-full md:w-1/2 z-20">
            <h2 className="text-xl md:text-2xl font-bold mb-4">What Hosts are saying about us</h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">{testimonials[currentIndex].quote}</p>
            <div className="flex items-end">
              <div className="flex flex-col">
                <span className="font-semibold">{testimonials[currentIndex].name}</span>
                <span className="text-sm text-gray-600">{testimonials[currentIndex].title}</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-20">
            <div className="relative rounded-lg overflow-hidden">
              <div className="relative w-[200px] h-[280px] md:w-[250px] md:h-[350px] rounded-lg overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-[#8CBFBA] w-4" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

       
      </div>
    </div>
  );
}
