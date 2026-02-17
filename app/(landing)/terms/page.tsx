import React from "react";
import photo1 from "@/public/termsAndCondition.png";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const TermsPage = () => {
  return (
    <>
      <div className="absolute w-full lg:pt-8">
        <Navbar />
      </div>
      <div className=" bg-white pt-32">
        <div className="container mx-auto px-4">
          <div
            className="relative h-50 md:h-62.5 xl:h-95 rounded-2xl"
            style={{
              backgroundImage: `url(${photo1.src})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[#ffff] absolute bottom-0 p-6 xl:p-10 font-bold text-[16px] xl:text-[20px]">
              Terms & Conditions
            </h1>
          </div>

          <div className="py-8 sm:py-12 md:py-16">
            <div className="">
              <h2 className="text-base md:text-2xl font-bold mb-8 text-gray-900">
                Terms & Conditions
              </h2>

              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="text-base font-bold mb-3 text-gray-900">
                  1. Using our service
                </h3>
                <p className="text-sm leading-relaxed text-[#989898]">
                  Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc
                  tellus lorem adipiscing. Convallis at mi dictumst nulla amet.
                  Ipsum consequat vel donec ut arnet ante semper. Amet tempus
                  tellus aliquam volutpat enim dolor tristique.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-6">
                <h3 className="text-base font-bold mb-3 text-gray-900">
                  2. Your account
                </h3>
                <p className="text-sm leading-relaxed text-[#989898]">
                  Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc
                  tellus lorem adipiscing. Convallis at mi dictumst nulla amet.
                  Ipsum consequat vel donec ut arnet ante semper. Amet tempus
                  tellus aliquam volutpat enim dolor tristique.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-6">
                <h3 className="text-base font-bold mb-3 text-gray-900">
                  3. Payment procedure
                </h3>
                <p className="text-sm leading-relaxed text-[#989898]">
                  Lorem ipsum dolor sit amet consectetur. Volutpat purus nunc
                  tellus lorem adipiscing. Convallis at mi dictumst nulla amet.
                  Ipsum consequat vel donec ut arnet ante semper. Amet tempus
                  tellus aliquam volutpat enim dolor tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsPage;
