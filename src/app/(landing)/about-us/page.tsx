import Image from "next/image";
import React from "react";

import Navbar from "@/src/components/shared/Navbar";
import SubTitle from "@/src/components/shared/title/title";
import Footer from "@/src/components/shared/Footer";


const AboutUsPage = () => {
  return (
    <>
      <div className="absolute w-full lg:pt-8">
        <Navbar />
      </div>

      <div className="pb-20">
        <div className="container mx-auto px-4 pt-40">
          <SubTitle text="About Us" />

          <div className="pt-20">
            <div className="bg-secondary/40 rounded-[20px] p-6 flex flex-col md:flex-row justify-between items-center gap-3">
              {/* left */}
              <div className="">
                <div className="space-y-6">
                  <p className="text-[#989898]">
                    We believe every meaningful moment deserves to be remembered
                    beautifully. Our platform was created to transform the way
                    event memories are captured, discovered, and shared — making
                    the experience seamless for both organizers and guests.?
                  </p>
                  <p className="text-[#989898]">
                    With smart face-recognition technology, guests can instantly
                    find the photos they appear in, while event organizers enjoy
                    powerful tools to manage galleries, branding, and
                    monetization — all in one elegant, intuitive platform.?
                  </p>
                  <p className="text-[#989898]">
                    Whether it's a wedding, corporate conference, sports event,
                    or graduation ceremony, we're here to ensure every memory is
                    preserved with care, clarity, and sophistication.?
                  </p>
                  <p className="text-[#989898]">
                    Our mission is simple:?to make every moment easy to relive —
                    and impossible to forget.
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="">
                <div>
                  <Image
                    src="/aboutPhoto.png"
                    alt="photo"
                    width={500}
                    height={500}
                    className="  object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
