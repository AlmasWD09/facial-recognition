"use client";

import { Upload_cc_Icon } from "@/src/components/icon";
import Form from "@/src/components/resuable/from";
import Modal from "@/src/components/resuable/modal";
import { Button } from "@/src/components/ui/button";
import { add_event_photo } from "@/src/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface AddEventImageProps {
  addEventModal: { isAdd: boolean; isEdit: boolean };
  setAddEventModal: (
    key: keyof { isAdd: boolean; isEdit: boolean },
    value: boolean,
  ) => void;
}

const AddEventImage = ({
  addEventModal,
  setAddEventModal,
}: AddEventImageProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);



  const addForm = useForm({
    resolver: zodResolver(add_event_photo),
    defaultValues: {
      image: undefined,
    },
  });
  const { setValue, reset } = addForm;

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

  const handleSubmit = async (values: FieldValues) => {};

  return (
    <>
      <Modal
        open={addEventModal.isAdd}
        setIsOpen={(v: any) => setAddEventModal("isAdd", v)}
        title="Add Image"
        subtitle={
          <div>
            <span className="text-xs font-normal text-[#989898]">
              You can upload event image.
            </span>
          </div>
        }
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div className="">
          <Form
            className="space-y-5 mt-16"
            from={addForm}
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
              {addForm?.formState?.errors?.image && (
                <p className="text-[#f73f4e] mt-1 flex items-center gap-1 text-sm">
                  {addForm?.formState?.errors?.image?.message as string}
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
            <Button
              style={{
                background:
                  "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
              }}
              className="cursor-pointer w-full mt-4 rounded-lg text-white h-11 font-semibold"
            >
              Add
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddEventImage;
