"use client";

import { Setting_Nav_Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import photo1 from "@/public/banner-bg.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SubscriptionManagement = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handleSubscriptionCancel = (packageValue: string) => {
    if (packageValue === "monthly") {
      setSelectedPlan(packageValue);
    }

    if (packageValue === "events") {
      setSelectedPlan(packageValue);
    }

  };

  const handleNavigateEventPage = () => {
    router.push("/event-management");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${photo1.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          {/* Gradient Border Button */}
          <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
              onClick={() => handleNavigateEventPage()}
            >
              <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                Event management
              </span>
            </button>
          </div>

          {/* Settings Icon */}
          <button
            onClick={() => router.push("/settings")}
            className="cursor-pointer"
          >
            <Setting_Nav_Icon />
          </button>
        </div>

        {/* Gradient Border Card */}
        <div className="">
          <div className="bg-[#fff7f4]/60 shadow rounded-2xl p-8 min-h-[calc(100vh-140px)] ">
            <div className="pb-20 flex flex-col justify-center items-center">
              <h1 className="text-base lg:text-[24px] text-[#121212] font-bold">
                Subscription management
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 md:px-60">
              {/* first card */}
              <div
                className={`relative lg:w-212.5 h-auto md:min-h-100  rounded-lg p-px cursor-pointer transition-all
                  
                  ${
                    selectedPlan === "monthly"
                      ? "bg-linear-to-r from-[#FEAC1A] to-[#F84426]"
                      : "border"
                  }
                `}
              >
                <div className="h-full w-full flex flex-col justify-between bg-white rounded-lg p-6">
                  <div>
                    <h1 className="font-semibold text-[28px] text-center TextGradientTwo">
                      $50/Monthly
                    </h1>
                    <ul className="list-disc space-y-3 pl-6 mt-6">
                      <li className="text-[#989898]">Unlimited events</li>
                      <li className="text-[#989898]">$0.05 a photo</li>
                      <li className="text-[#989898]">Cancel anytime</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Button
                      onClick={() => handleSubscriptionCancel("monthly")}
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
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>

              {/* second card */}
              <div
                className={`relative lg:w-212.5 h-auto md:min-h-100  rounded-lg p-px cursor-pointer transition-all
                  
                  ${
                    selectedPlan === "events"
                      ? "bg-linear-to-r from-[#FEAC1A] to-[#F84426]"
                      : "border"
                  }
                `}
              >
                <div className="h-full w-full flex flex-col justify-between bg-white rounded-lg p-6">
                  <div>
                    <h1 className="font-semibold text-[28px] text-center text-[#989898]">
                      $20/Events
                    </h1>
                    <ul className="list-disc space-y-3 pl-6 mt-6">
                      <li className="text-[#989898]">100 photos free upload</li>
                      <li className="text-[#989898]">
                        Various Prices depending on how many photos
                      </li>
                      <li className="text-[#989898]">Cancel anytime</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={() => handleSubscriptionCancel("events")}
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
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
