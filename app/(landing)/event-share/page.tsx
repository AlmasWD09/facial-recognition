"use client";

import {
  Delete_event_ic_Icon,
  EmailIcon,
  Event_logo_Icon,
  Reset_event_ic_Icon,
  Save_event_ic_Icon,
  Setting_Nav_Icon,
} from "@/app/icon";
import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BackButton from "@/components/shared/back-button";
import { Switch } from "@/components/ui/switch";
import { LinkIcon, LockIcon, RefreshCwIcon, TrashIcon } from "lucide-react";

const emails = [
  "abc123@gmail.com",
  "user123@example.com",
  "hello@creativeoutlook.com",
  "info@innovativeideas.com",
  "support@techsolutions.com",
  "contact@futurevision.com",
  "admin@digitalworld.com",
];

const EventShare = () => {
  const router = useRouter();
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [switchValue, setSwitchValue] = useState<boolean>(false);

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

  const hanldeEditPage = (text: string) => {
    if (selectedId && text === "edit") {
      router.push(`/edit-event?editId=${selectedId}`);
    } else if (selectedId && text === "share") {
      router.push(`/event-share`);
    }
  };

  // switch function
  const handleSwitchChange = (checked: boolean) => {
    setSwitchValue(checked);
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

            {selectedIndexes.length < 2 && (
              <>
                <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
                  <button
                    type="button"
                    onClick={() => hanldeEditPage("edit")}
                    className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
                  >
                    <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                      Edit
                    </span>
                  </button>
                </div>
              </>
            )}
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

          <div className="flex flex-col md:flex-row  items-center gap-2">
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
            className={`bg-[#fff7f4]/60 shadow rounded-2xl p-4 min-h-[calc(100vh-140px)] `}
          >
            <div className="flex justify-between items-center">
              <div className="">
                <BackButton
                  text="Back"
                  onClick={() => router.back()}
                  className="text-lg px-4 rounded-lg"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={switchValue}
                    onCheckedChange={handleSwitchChange}
                  />
                  <span>{switchValue ? "Active" : "Inactive"}</span>
                </div>
              </div>
            </div>



            {/* *** */}
            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-8">
              {/* Event Link Section */}
              <div className="w-full flex flex-col space-y-2 border border-gray-200 p-4 rounded-xl">
                <div>
                  <div className="font-semibold text-gray-700 ">Event link</div>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-2">
                    <div className="flex-1 flex items-center gap-2  border border-gray-200 rounded-lg px-3 py-2">
                      <LinkIcon className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value="http://lldg.l.ab/uskyfirlfte"
                        readOnly
                        className="h-6 flex-1 bg-transparent text-sm text-gray-600 outline-none"
                      />
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Copy link
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-gray-700">Guest Email</div>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-[#DEDEDE33] border border-gray-200 rounded-lg px-3 py-2">
                      <EmailIcon className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value="example@gmail.com"
                        readOnly
                        className="h-6 flex-1 bg-transparent text-sm text-gray-600 outline-none"
                      />
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Send invite
                      </Button>
                    </div>
                  </div>
                </div>
              </div>




              {/* Code Section */}
              <div className="w-full border border-gray-200 p-4 rounded-xl ">
                <div className="font-semibold text-gray-700 mb-2">Code</div>
                <div className="">
                  {/* Code Display Boxes */}
                  <div className="flex-1 flex gap-2 md:gap-10">
                    {[2, 0, 0, 0, 0, 0].map((digit, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 md:w-22 md:h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg text-lg font-semibold text-gray-700"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        <Delete_event_ic_Icon />
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        <Reset_event_ic_Icon />
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        <Save_event_ic_Icon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            {/* **** */}
            <div className="space-y-0 p-4 bg-[#DEDEDE33] rounded-xl mt-8 overflow-x-auto">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">Email</h2>
                </div>
                <div className="flex justify-end">
                  <h2 className="font-semibold">Status</h2>
                </div>
              </div>
              {emails.map((email, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 "
                >
                  <div className="text-sm text-gray-600 flex-1 min-w-60 pr-4">
                    <span className="">{email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Send again
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventShare;
