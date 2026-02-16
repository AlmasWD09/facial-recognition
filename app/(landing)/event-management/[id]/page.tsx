"use client";

import { Event_logo_Icon, Setting_Nav_Icon } from "@/app/icon";
import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BackButton from "@/components/shared/back-button";

const galleryData = [
  { id: 1, image: "/gallery/photo01.png" },
  { id: 2, image: "/gallery/photo02.png" },
  { id: 3, image: "/gallery/photo03.png" },
  { id: 4, image: "/gallery/photo04.png" },
  { id: 5, image: "/gallery/photo05.png" },
  { id: 6, image: "/gallery/photo06.png" },
  { id: 7, image: "/gallery/photo07.png" },
  { id: 8, image: "/gallery/photo08.png" },
];

const DetailsPage = () => {
  const router = useRouter();
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getLayoutClass = (index: number) => {
    const patterns = [
      "col-span-3", // Narrow
      "col-span-6", // Wide
      "col-span-3", // Narrow
      "col-span-4", // Medium
      "col-span-5", // Medium-wide
      "col-span-3", // Narrow
      "col-span-5", // Medium-wide
      "col-span-4", // Medium
      "col-span-3", // Narrow
    ];

    return patterns[index % patterns.length];
  };

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

            <div
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
            </div>
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

          <div className="flex flex-col md:flex-row  items-center gap-2 mt-10 md:mt-0 md:mr-20">
            <Button
              //   onClick={() => router.push("/create-event")}
              style={{
                background:
                  "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
              }}
              className="cursor-pointer w-full  rounded-lg text-white h-11 font-semibold"
            >
              Upload image
            </Button>
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
            className={`bg-[#fff7f4]/60 shadow rounded-2xl p-4 min-h-[calc(100vh-140px)]`}
          >
            <div className="flex justify-between items-center">
              <div className="">
                <BackButton
                  text="Back"
                  onClick={() => router.back()}
                  className="text-lg px-4 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-12 gap-3">
                {galleryData?.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${getLayoutClass(
                      index,
                    )} relative h-95 rounded-xl overflow-hidden group cursor-pointer bg-gray-100`}
                  >
                    <Image
                      src={item.image}
                      alt={`Gallery ${item.id}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover "
                    />

                    <div className="absolute right-2 top-2 ">
                      <div className="border border-orange-400 flex justify-center items-center p-1 rounded">
                        <Checkbox
                          id={`event-${item.id}`}
                          onCheckedChange={(checked) =>
                            handleCheckbox(index, item.id, checked as boolean)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
