"use client";

import { useRouter } from "next/navigation";
import CustomButton2 from "../resuable/customButton/customButton2";
import SubTitle from "../shared/title/title";
import photo1 from "@/public/left.png";
import { Button } from "../ui/button";

const PricingPlan = () => {
  const router = useRouter();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${photo1.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 pt-40">
          <SubTitle text="Pricing plans that grow with you" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-20">
            {/* first card */}
            <div className="relative h-44.25 lg:h-auto  rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <div className="h-full w-full bg-white rounded-lg p-6">
                <h1 className="font-semibold text-[28px] text-center TextGradientTwo">
                  $50/Monthly
                </h1>
                <ul className="list-disc space-y-3 pl-6 mt-6">
                  <li className="text-[#989898]">Unlimited events</li>
                  <li className="text-[#989898]">$0.05 a photo</li>
                </ul>
              </div>
            </div>

            {/* second card */}
            <div className="relative h-44.25 lg:h-auto  rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <div className="h-full w-full bg-white rounded-lg p-6">
                <h1 className="font-semibold text-[28px] text-center TextGradientTwo">
                  $20/Events
                </h1>
                <ul className="list-disc space-y-3 pl-6 mt-6">
                  <li className="text-[#989898]">100 photos free upload</li>
                  <li className="text-[#989898]">
                    Various Prices depending on how many photos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-20">
            <div className="w-fit">
                <Button
                  onClick={() => router.push("/subscription-purchase")}
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
                  Manage plan
                </Button>
              </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.875 8.25H3V5.0625C3 4.5375 3.4125 4.125 3.9375 4.125C4.4625 4.125 4.875 4.5375 4.875 5.0625V8.25ZM7.5 8.25H5.625V2.8125C5.625 2.2875 6.0375 1.875 6.5625 1.875C7.0875 1.875 7.5 2.2875 7.5 2.8125V8.25ZM10.125 8.25H8.25V2.0625C8.25 1.5375 8.6625 1.125 9.1875 1.125C9.7125 1.125 10.125 1.5375 10.125 2.0625V8.25ZM12.75 8.25H10.875V3.1875C10.875 2.6625 11.2875 2.25 11.8125 2.25C12.3375 2.25 12.75 2.6625 12.75 3.1875V8.25ZM12.0375 16.125L10.1625 14.25L13.9125 10.5C14.4375 9.975 15.2625 9.975 15.75 10.5C16.275 11.025 16.275 11.85 15.75 12.3375L12.0375 16.125Z"
                    fill="#FFCC80"
                  />
                  <path
                    d="M10.875 7.875C10.875 8.1 10.725 8.25 10.5 8.25C10.275 8.25 10.125 8.1 10.125 7.875H8.25C8.25 8.1 8.1 8.25 7.875 8.25C7.65 8.25 7.5 8.1 7.5 7.875H5.625C5.625 8.1 5.475 8.25 5.25 8.25C5.025 8.25 4.875 8.1 4.875 7.875H3V13.875C3 15.525 4.35 16.875 6 16.875H10.2C11.5875 16.875 12.75 15.75 12.75 14.325V7.875H10.875Z"
                    fill="#FFCC80"
                  />
                  <path
                    d="M5.77991 10.8643L6.70766 9.93652L10.6845 13.9134L9.75678 14.8411L5.77991 10.8643Z"
                    fill="#F44336"
                  />
                  <path
                    d="M9.74738 9.93896L10.6755 10.8667L6.69863 14.8436L5.77051 13.9158L9.74738 9.93896Z"
                    fill="#F44336"
                  />
                </svg>
              </span>
              <h2 className="text-lg font-medium text-[#989898]">Event Guest Never Pay</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
