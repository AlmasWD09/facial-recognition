"use client";

import { Setting_Nav_Icon, Upload_cc_Icon } from "@/app/icon";
import { FromInput } from "@/components/resuable/form-input";
import Form from "@/components/resuable/from";
import DatePickerCompo from "@/components/shared/datePicker/DatePickerCompo";
import { Button } from "@/components/ui/button";
import { create_event, edit_event } from "@/lib/schema";
import photo1 from "@/public/banner-bg.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const EditEvent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const editId = searchParams.get("editId");

  const from = useForm({
    resolver: zodResolver(edit_event),
    defaultValues: {
      image: null as File | null,
      event_name: "",
      event_date: "",
      event_location: "",
    },
  });
const { setValue, reset } = from;


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file, { shouldValidate: true });
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setSelectedFile(null);
    setValue("image", undefined, { shouldValidate: true });
  };

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

                <div className="">
                  <p className="pb-1 text-start font-semibold">Event Image</p>
                  {imagePreview ? (
                    <div className="flex flex-col ">
                      <div className="relative h-25.5 w-75 flex justify-center">
                        <div className=" flex justify-end overflow-hidden bg-secondary rounded-lg ">
                          <div className="h-25.5 w-75">
                            <Image
                              src={imagePreview}
                              alt="photo"
                              fill
                              className=" object-cover rounded-lg"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={removeImage}
                            className="cursor-pointer absolute -top-1 -right-1 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 transition-colors"
                          >
                            <X className=" h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label
                        htmlFor="image"
                        className="flex h-25.5 w-75 cursor-pointer flex-col items-center justify-center rounded-lg  bg-secondary/70 text-secondary transition-colors hover:bg-secondary"
                      >
                        <span>
                          <Upload_cc_Icon />
                        </span>
                      </label>
                    </div>
                  )}
                  {from?.formState?.errors?.image && (
                    <p className="text-[#f73f4e] mt-1 flex items-center gap-1 text-sm">
                      {from?.formState?.errors?.image?.message as string}
                      <CircleAlert size={14} />
                    </p>
                  )}
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>




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
};

export default EditEvent;
