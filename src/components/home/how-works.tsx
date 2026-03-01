"use client";

import React from "react";
import SubTitle from "../shared/title/title";
import Image from "next/image";
import CustomButton2 from "../resuable/customButton/customButton2";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Cookies from "js-cookie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../ui/button";

const HowWorks = () => {
  const router = useRouter();

  const selectedPlanData = Cookies.get("selectedPlan");
  const convertselectedPlanData = selectedPlanData
    ? JSON.parse(selectedPlanData)
    : null;
  const handleCreateEvent = () => {
    if (convertselectedPlanData) {
      router.push("/create-event");
    } else {
      router.push("/subscription-purchase");
    }
  };

  const slides = [
    {
      image: "/howWorks/works-photo01.png",
      title: "Buy a package",
      description: "User have to buy any one package for create new event.",
    },
    {
      image: "/howWorks/works-photo02.png",
      title: "Upload images",
      description: "You have to upload picture in particular event folder.",
    },
    {
      image: "/howWorks/works-photo03.png",
      title: "Share",
      description:
        "User can share image with guest user via their email addresses.",
    },
    {
      image: "/howWorks/works-photo01.png",
      title: "Upload images",
      description:
        "User can share image with guest user via their email addresses.",
    },
    {
      image: "/howWorks/works-photo02.png",
      title: "Share",
      description:
        "User can share image with guest user via their email addresses.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 pt-40">
        <SubTitle text="How it Works" />

        <div className="pt-20">
          <div className="flex justify-end">
            <h1 className="font-semibold pb-3 TextGradientTwo">
              For Organizer
            </h1>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={16}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={false}
            breakpoints={{
              // Mobile devices (< 768px)
              0: {
                slidesPerView: 1,
              },
              // Tablet and above (>= 768px)
              768: {
                slidesPerView: 2,
              },
              // Tablet and above (>= 1024px)
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-secondary/40 rounded-[20px] p-4 flex flex-col justify-center items-center space-y-4 py-8">
                  <div>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={400}
                      className="w-62.5 object-cover rounded-xl"
                    />
                  </div>
                  <h2 className="text-base md:text-[20px] text-[#121212] font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-[#989898] text-center">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
        </div>

        <div className="flex justify-center items-center pt-20">
          <div className="w-fit">
            <Button
               onClick={() => handleCreateEvent()}
              style={{
                background:
                  "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                fontSize: "20px",
                color: "white",
                cursor: "pointer",
              }}
              className="cursor-pointer w-full rounded-sm  text-white h-11"
            >
              Create an event
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWorks;
