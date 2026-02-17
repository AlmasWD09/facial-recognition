"use client";

import { Setting_Nav_Icon, Upload_cc_Icon } from "@/app/icon";
import { FromInput } from "@/components/resuable/form-input";
import Form from "@/components/resuable/from";
import DatePickerCompo from "@/components/shared/datePicker/DatePickerCompo";
import { Button } from "@/components/ui/button";
import { edit_event } from "@/lib/schema";
import photo1 from "@/public/banner-bg.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SpinnerCa from "../resuable/Spinner_ca";

function EditEvent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const editId = searchParams.get("editId");

  const from = useForm({
    resolver: zodResolver(edit_event),
    defaultValues: {
      event_name: "",
      event_date: "",
      event_location: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    // router.push("/event-management");
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
          <div className="bg-[#fff7f4]/60 shadow rounded-2xl p-4 min-h-[calc(100vh-140px)] flex items-center justify-center">
            {/* Empty State */}
            <div className="flex flex-col text-center w-full max-w-xl bg-[#FFFFFF] p-10 rounded-xl">
              {/* Header */}
              <div>
                <h2 className="text-base lg:text-[24px] text-[#121212] font-bold">
                  Edit this event
                </h2>
                <p className="text-[#989898]">
                  You can edit your event name, date & location.
                </p>
              </div>

              {/* Form */}
              <Form
                className="space-y-4 pt-8 w-full"
                from={from}
                onSubmit={handleSubmit}
              >
                <FromInput
                  className="h-11 w-full"
                  name="event_name"
                  placeholder="Write your event name..."
                  label="Event name"
                />
                <div>
                  <DatePickerCompo />
                </div>

                <FromInput
                  className="h-11 w-full"
                  name="event_location"
                  placeholder="Write your event location..."
                  label="Event location"
                />

                <Button
                  style={{
                    background:
                      "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                  }}
                  className="cursor-pointer w-full mt-4 rounded-lg text-white h-11 font-semibold"
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditEventSuspense() {
  return (
    <Suspense fallback={<SpinnerCa />}>
      <EditEvent />
    </Suspense>
  );
}
