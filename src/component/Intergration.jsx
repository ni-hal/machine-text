"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import image from "../images/Booking 1.png"
import image2 from "../images/logoi 1.png"
import image3 from "../images/logo-ru-ukraine_dark_x1 1.png"
import image4 from "../images/OIP1 1.png"
import Image5  from "../images/R (2) 1 (1).png" ;
import Image6 from "../images/WhatsApp Image 2024-02-05 at 3.41 1.png" ;

const integrationLogos = [
  image,
  image3,
  image4,
  image2,
  Image5,
  Image6,
  image,
];

export default function Integrations() {
  return (
    <section className="text-center mt-6 px-4">
      <h2 className="text-[#008080] text-4xl font-bold">Our Integrations</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={3} 
        breakpoints={{
          768: { slidesPerView: 4 }, 
          1024: { slidesPerView: 6 }, 
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mt-6"
      >
        {integrationLogos.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="h-14 w-32 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Integration partner ${i + 1}`}
                width={128}
                height={48}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
