"use client";

import React, { useState } from "react";
import SubTitle from "../shared/title/title";
import photo1 from "@/public/right.png";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqList = [
    {
      q: "Why do we use it?",
      a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      q: "Where can I get some?",
      a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      q: "Why is Lorem Ipsum important?",
      a: "It is important for typesetting and printing because it provides a visual placeholder text that is readable yet not distracting.",
    },
    {
      q: "Can I use Lorem Ipsum for design purposes?",
      a: "Yes, Lorem Ipsum can be used in design to mock up a page without focusing on the content itself, allowing designers to focus on layout and typography.",
    },
    {
      q: "Who uses Lorem Ipsum?",
      a: "Lorem Ipsum is commonly used by graphic designers, web developers, and print media professionals who require placeholder text to fill space in designs.",
    },
    {
      q: "What are some alternatives to Lorem Ipsum?",
      a: "Some alternatives to Lorem Ipsum include 'Cicero Ipsum' or 'Hipster Ipsum,' which can provide more themed or unique placeholder text.",
    },
  ];

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${photo1.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 pt-40">
        <SubTitle text="FAQ" />

        {/* Main Content Section */}
        <div className="pt-8">
          <div className="">
            <div className="flex flex-col">
              <div className="">
                <div className="space-y-2">
                  {faqList.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-xl overflow-hidden transition-all duration-200 ${
                        activeIndex === index 
                          ? 'border-2 border-transparent bg-gradient-to-r from-[#FEAC1A] to-[#F84426] bg-origin-border' 
                          : 'bg-gray-50 border border-transparent'
                      }`}
                    >
                      {/* Gradient border wrapper */}
                      <div className={`rounded-xl overflow-hidden ${
                        activeIndex === index 
                          ? 'bg-white' 
                          : ''
                      }`}>
                        <button
                          className={`w-full p-5 flex justify-between items-center transition-colors duration-200 text-left ${
                            activeIndex === index 
                              ? 'bg-white ' 
                              : 'bg-gray-50 '
                          }`}
                          onClick={() => toggleItem(index)}
                        >
                          <span className={`flex-1 text-base font-semibold pr-3 ${
                            activeIndex === index 
                              ? '' 
                              : 'text-gray-800'
                          }`}>
                            {item.q}
                          </span>
                          <span className="text-xl font-bold cursor-pointer">
                            {activeIndex === index ? (
                              <span>
                                <svg
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6625 9.65005C15.4867 9.47449 15.2484 9.37588 15 9.37588C14.7516 9.37588 14.5133 9.47449 14.3375 9.65005L4.9625 19.0251C4.7969 19.2028 4.70674 19.4378 4.71103 19.6807C4.71532 19.9236 4.81371 20.1553 4.98547 20.3271C5.15724 20.4988 5.38897 20.5972 5.63185 20.6015C5.87472 20.6058 6.10978 20.5157 6.2875 20.3501L15 11.6376L23.7125 20.3501C23.7983 20.4422 23.9018 20.516 24.0168 20.5673C24.1318 20.6185 24.256 20.6461 24.3818 20.6483C24.5077 20.6505 24.6328 20.6274 24.7495 20.5802C24.8662 20.5331 24.9723 20.4629 25.0613 20.3739C25.1503 20.2848 25.2205 20.1788 25.2677 20.062C25.3148 19.9453 25.338 19.8203 25.3357 19.6944C25.3335 19.5685 25.306 19.4444 25.2547 19.3294C25.2035 19.2144 25.1296 19.1109 25.0375 19.0251L15.6625 9.65005Z"
                                    fill="url(#paint0_linear_48_77)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_48_77"
                                      x1="4.71088"
                                      y1="20.6484"
                                      x2="26.7731"
                                      y2="15.2539"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop offset="0.115385" stopColor="#FEAC1A" />
                                      <stop offset="0.875" stopColor="#F84426" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </span>
                            ) : (
                              <span>
                                <svg
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6625 20.3499C15.4867 20.5255 15.2484 20.6241 15 20.6241C14.7516 20.6241 14.5133 20.5255 14.3375 20.3499L4.9625 10.9749C4.7969 10.7972 4.70674 10.5622 4.71103 10.3193C4.71532 10.0764 4.81371 9.84469 4.98547 9.67292C5.15724 9.50115 5.38897 9.40276 5.63185 9.39848C5.87472 9.39419 6.10978 9.48435 6.2875 9.64995L15 18.3624L23.7125 9.64995C23.7983 9.55784 23.9018 9.48396 24.0168 9.43272C24.1318 9.38148 24.256 9.35393 24.3818 9.35171C24.5077 9.34949 24.6328 9.37264 24.7495 9.41979C24.8662 9.46695 24.9723 9.53713 25.0613 9.62615C25.1503 9.71517 25.2205 9.82122 25.2677 9.93795C25.3148 10.0547 25.338 10.1797 25.3357 10.3056C25.3335 10.4315 25.306 10.5556 25.2547 10.6706C25.2035 10.7856 25.1296 10.8891 25.0375 10.9749L15.6625 20.3499Z"
                                    fill="#121212"
                                  />
                                </svg>
                              </span>
                            )}
                          </span>
                        </button>

                        {activeIndex === index && (
                          <div className="px-5 pb-5 bg-white animate-fade-in">
                            <p className="text-gray-600 leading-6 text-sm">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;