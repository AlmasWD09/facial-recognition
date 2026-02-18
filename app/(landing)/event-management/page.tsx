"use client";


import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Event_logo_Icon, Setting_Nav_Icon } from "@/components/icon";

const eventData = [
  {
    id: 1,
    name: "Tech Innovation Summit",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "AI & Robotics Expo",
    location: "Chattogram, Bangladesh",
  },
  {
    id: 3,
    name: "Startup Founders Meetup",
    location: "Sylhet, Bangladesh",
  },
  {
    id: 4,
    name: "Web Development Conference",
    location: "Rajshahi, Bangladesh",
  },
  {
    id: 5,
    name: "Mobile App Developers Summit",
    location: "Khulna, Bangladesh",
  },
  {
    id: 6,
    name: "Digital Marketing Masterclass",
    location: "Barishal, Bangladesh",
  },
  {
    id: 7,
    name: "Cyber Security Conference",
    location: "Cumilla, Bangladesh",
  },
  {
    id: 8,
    name: "Flutter Developers Meetup",
    location: "Gazipur, Bangladesh",
  },
  {
    id: 9,
    name: "Cloud Computing Workshop",
    location: "Narayanganj, Bangladesh",
  },
  {
    id: 10,
    name: "Software Engineering Career Fair",
    location: "Mymensingh, Bangladesh",
  },
  {
    id: 11,
    name: "Blockchain Innovation Forum",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 12,
    name: "React JS Conference",
    location: "Chattogram, Bangladesh",
  },
  {
    id: 13,
    name: "Tech Networking Night",
    location: "Sylhet, Bangladesh",
  },
  {
    id: 14,
    name: "UI/UX Design Bootcamp",
    location: "Gazipur, Bangladesh",
  },
  {
    id: 15,
    name: "Full Stack Developer Meetup",
    location: "Rajshahi, Bangladesh",
  },
  {
    id: 16,
    name: "Python Developers Conference",
    location: "Khulna, Bangladesh",
  },
  {
    id: 17,
    name: "AI Startup Pitch Day",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 18,
    name: "DevOps Engineering Workshop",
    location: "Narayanganj, Bangladesh",
  },
  {
    id: 19,
    name: "Tech Career Guidance Seminar",
    location: "Cumilla, Bangladesh",
  },
  {
    id: 20,
    name: "Future of Technology Summit",
    location: "Dhaka, Bangladesh",
  },
];

const EventManagement = () => {
  const router = useRouter();
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedPlanData = Cookies.get("selectedPlan");
  const convertselectedPlanData = selectedPlanData
    ? JSON.parse(selectedPlanData)
    : null;

  const handleCreateNewEvent = () => {
    if (convertselectedPlanData) {
      router.push("/create-event");
    } else {
      router.push("/subscription-purchase");
    }
  };

  const handleNavigateEventPage = () => {
    router.push("/event-management");
  };

  const handleCheckbox = (
    indexNumber: number,
    id: number,
    checked: boolean,
  ) => {
    setSelectedId(id);
    setSelectedIndexes((prev) => {
      if (checked) {
        return [...prev, indexNumber];
      } else {
        return prev.filter((item) => item !== indexNumber);
      }
    });
  };

  const hanldeEventNavigate = (text: string) => {
    if (selectedId && text === "edit") {
      router.push(`/edit-event?eventId=${selectedId}`);
    } else if (selectedId && text === "share") {
      router.push(`/event-share?eventId=${selectedId}`);
    }
  };

  const isDisabled = selectedIndexes.length > 1;

  // const eventData = 0 || [];

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
      <div className="container mx-auto px-4 py-4 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5  ">
          <div className="flex flex-col md:flex-row items-center gap-2">
            {/* event management */}
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

            {/* <div
              className={`inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px ${
                isDisabled ? "opacity-50 cursor-default" : ""
              }`}
            >
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => hanldeEventNavigate("share")}
                className={`rounded-lg bg-white px-4 py-2 font-medium ${
                  isDisabled ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                  Share
                </span>
              </button>
            </div> */}
            <div
              className={`inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px ${
                isDisabled ? "opacity-50 cursor-default" : ""
              }`}
            >
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => hanldeEventNavigate("edit")}
                className={`rounded-lg bg-white px-4 py-2 font-medium ${
                  isDisabled ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                  Edit
                </span>
              </button>
            </div>

            {/* delete */}
            <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
                // onClick={() => handleNavigateEventPage()}
              >
                <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                  Delete
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center gap-2 mt-10 md:mt-0 ">
            {eventData?.length > 0 && (
              <button
                onClick={() => handleCreateNewEvent()}
                style={{
                  background:
                    "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                }}
                className="cursor-pointer flex items-center gap-2 w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-medium"
              >
                Create new event
              </button>
            )}
            <button
              onClick={() => router.push("/settings")}
              className="cursor-pointer"
            >
              <span className="">
                <Setting_Nav_Icon />
              </span>
            </button>
          </div>
        </div>

        {/* Gradient Border Card */}
        <div className="">
          <div
            className={`bg-[#fff7f4]/60 shadow rounded-2xl p-4 min-h-[calc(100vh-140px)] ${eventData?.length > 0 ? "" : "flex items-center justify-center"}`}
          >
            {eventData?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {eventData?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-[#f2ecea] p-3 rounded-xl cursor-pointer"
                      onClick={() =>
                        router.push(`/event-management/${item.id}`)
                      }
                    >
                      <div
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        <Checkbox
                          id={`event-${item.id}`}
                          onCheckedChange={(checked) =>
                            handleCheckbox(index, item.id, checked as boolean)
                          }
                        />
                      </div>
                      <div>
                        <span>
                          <Event_logo_Icon />
                        </span>
                      </div>
                      <div>
                        <h2 className="text-[#121212] font-semibold">
                          {item.name}
                        </h2>
                        <p className="text-[#989898]">{item.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center text-center w-xl bg-[#6565650D] p-10 rounded-xl">
                  <Image
                    src="/404-photo01.png"
                    alt="photo"
                    width={120}
                    height={120}
                    className="my-16"
                  />

                  <h2 className="font-bold text-xl">Oops!</h2>
                  <p className="text-[#888888] mb-8">
                    You have no event. Please create a new event
                  </p>
                  <div className="w-full shadow-[0_4px_12px_rgba(255,208,125,0.25),0_-4px_8px_rgba(255,208,125,0.15)] rounded-lg">
                    <button
                      onClick={() => handleCreateNewEvent()}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
