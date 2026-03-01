"use client";

import React, { useState } from "react";
import photo1 from "@/public/right.png";
import Navbar from "@/src/components/shared/Navbar";
import SubTitle from "@/src/components/shared/title/title";
import { Faq_ic_Icon, Faq_icc_Icon } from "@/src/components/icon";
import Footer from "@/src/components/shared/Footer";

function FaqPage() {
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
    <>
      <div className="absolute w-full lg:pt-8">
        <Navbar />
      </div>

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
                            ? "border-2 border-transparent bg-gradient-to-r from-[#FEAC1A] to-[#F84426] bg-origin-border"
                            : "bg-gray-50 border border-transparent"
                        }`}
                      >
                        {/* Gradient border wrapper */}
                        <div
                          className={`rounded-xl overflow-hidden ${
                            activeIndex === index ? "bg-white" : ""
                          }`}
                        >
                          <button
                            className={`w-full p-5 flex justify-between items-center transition-colors duration-200 text-left ${
                              activeIndex === index
                                ? "bg-white "
                                : "bg-gray-50 "
                            }`}
                            onClick={() => toggleItem(index)}
                          >
                            <span
                              className={`flex-1 text-base font-semibold pr-3 ${
                                activeIndex === index ? "" : "text-gray-800"
                              }`}
                            >
                              {item.q}
                            </span>
                            <span className="text-xl font-bold cursor-pointer">
                              {activeIndex === index ? (
                                <span>
                                  <Faq_ic_Icon />
                                </span>
                              ) : (
                                <span>
                                  <Faq_icc_Icon />
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
      <Footer />
    </>
  );
}

export default FaqPage;
