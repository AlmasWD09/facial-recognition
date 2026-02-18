"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import photo1 from "@/public/banner-bg.png";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Banner() {
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

  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${photo1.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col justify-between h-screen">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-28 md:gap-0 h-full pt-40 md:pt-0">
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-bold text-[24px] md:text-[40px]">
                You Were There, We'll Prove It.
              </h1>
              <p className="text-[#989898] pb-3">
                Smart AI that finds your photos in seconds without the endless
                scrolling.
              </p>
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

            <div className="pt-8 md:pt-0">
              <div>
                <Image
                  src="/banner-photo01.png"
                  alt="photo"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* category */}
          <div className="flex flex-wrap justify-center items-center gap-6 pb-6">
            <div className="w-50 md:w-fit flex items-center gap-2 bg-[rgba(163,163,163,0.10)] backdrop-blur-[20px] p-4 rounded-xl">
              <Image
                src="/banner/category01.png"
                alt="photo"
                width={100}
                height={100}
                className="w-7.5 h-7.5 object-cover rounded"
              />
              <h2 className="text-[#5D5D5D] text-base ">Take a Selfie</h2>
            </div>
            <div className="w-50 md:w-fit flex items-center gap-2 bg-[rgba(163,163,163,0.10)] backdrop-blur-[20px] p-4 rounded-xl">
              <Image
                src="/banner/category02.png"
                alt="photo"
                width={100}
                height={100}
                className="w-7.5 h-7.5 object-cover rounded"
              />
              <h2 className="text-[#5D5D5D] text-base ">See your photos</h2>
            </div>
            <div className="w-50 md:w-fit flex items-center gap-2 bg-[rgba(163,163,163,0.10)] backdrop-blur-[20px] p-4 rounded-xl">
              <Image
                src="/banner/category03.png"
                alt="photo"
                width={100}
                height={100}
                className="w-7.5 h-7.5 object-cover rounded"
              />
              <h2 className="text-[#5D5D5D] text-base ">Download</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
