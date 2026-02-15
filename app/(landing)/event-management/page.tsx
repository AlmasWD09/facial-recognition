"use client";

import { Setting_Nav_Icon } from "@/app/icon";
import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const EventManagement = () => {
  const router = useRouter();

  const selectedPlanData = Cookies.get("selectedPlan");
  const convertselectedPlanData = selectedPlanData
    ? JSON.parse(selectedPlanData)
    : null;

  const handleNavigate = () => {
    if (convertselectedPlanData) {
      router.push("/create-event");
    } else {
      router.push("/subscription-purchase");
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
          <div className="bg-[#fff7f4]/60 shadow rounded-2xl p-8 min-h-[calc(100vh-140px)] flex items-center justify-center">
            {/* Empty State */}
            <div className="flex flex-col items-center text-center w-xl bg-[#6565650D] p-10 rounded-xl">
              {/* Image */}
              <Image
                src="/404-photo01.png"
                alt="photo"
                width={120}
                height={120}
                className="my-16"
              />

              {/* Gradient Text Title */}
              <h2 className="font-bold text-xl">Oops!</h2>

              {/* Description */}
              <p className="text-[#888888] mb-8">
                You have no event. Please create a new event
              </p>

              {/* Gradient Border Button */}
              <div className="w-full shadow-[0_4px_12px_rgba(255,208,125,0.25),0_-4px_8px_rgba(255,208,125,0.15)] rounded-lg">
                <button
                  onClick={() => handleNavigate()}
                  className="
                    cursor-pointer
                    w-full
                    bg-white
                    px-8
                    py-3
                    rounded-lg
                    font-semibold
                    transition-all
                    "
                >
                  <span className="TextGradientTwo">Create New Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
