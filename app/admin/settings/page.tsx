"use client";
import { LocationFieldIcon, PhoneIpfIcon, UserInfIcon } from "@/app/icon";
import CustomButton from "@/components/resuable/customButton/customButton";
import { FromInput } from "@/components/resuable/form-input";
import Form from "@/components/resuable/from";
import Faq from "@/components/settings/faq";
import PrivacyPolicy from "@/components/settings/privacy-policy";
import TermsAndCondition from "@/components/settings/terms-and-condition";
import ProfileSkeleton from "@/components/shared/dateFormate/sleleton/settings/ProfileSkeleton";
import { db_profile_info_sc } from "@/lib/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// Tabs for navigation
const tabs = [
  { id: "personal", label: "Personal Info" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "faq", label: "FAQ" },
];

const SettingPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("personal");

  const fromEdit = useForm({
    resolver: zodResolver(db_profile_info_sc),
    defaultValues: {
      profile_pic: null as File | null,
      name: "",
      phone_number: "",
      address: "",
    },
    mode: "onChange",
  });
  const { setValue } = fromEdit;

  // const [updateProfileApi] = useUpdateProfileApiMutation();
  // const [editSinglePhotoProfileApi] = useEditSinglePhotoProfileApiMutation();
  // const {
  //   data: getProfile,
  //   isLoading,
  //   refetch,
  // } = useGetProfileApiQuery({ skip: activeTab !== "personal" });
  // const profileData = getProfile?.data;

  const [profileImage, setProfileImage] = useState('/adminPhoto.png');

  // useEffect(() => {
  //   if (profileData) {
  //     setValue("name", profileData.name);
  //     setValue("phone_number", profileData.phone_number);
  //     setValue("address", profileData.address);
  //   }
  // }, [profileData, setValue]);

  // useEffect(() => {
  //   if (profileData?.profile_pic) {
  //     setProfileImage(profileData.profile_pic);
  //   }
  // }, [profileData?.profile_pic]);

  // image file get and preview show
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    if (file) {
      formData.append("profile_pic", file);
    }

    // SINGLE IMAGE CHANGES
    // try {
    //   const res = await editSinglePhotoProfileApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     await refetch();
    //     setProfileImage(
    //       `${
    //         res.data?.profile_pic || profileData?.profile_pic
    //       }?t=${new Date().getTime()}`,
    //     );
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  const removeImage = () => {
    setImagePreview(null);
    setValue("profile_pic", {} as FileList);
  };

  const handleSubmit = async (values: FieldValues) => {
    // const formData = new FormData();
    // formData.append("name", values?.name);
    // formData.append("phone_number", values?.phone_number);
    // formData.append("address", values?.address);
    // try {
    //   const res = await updateProfileApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  // Fetch Privacy Policy data when privacy tab is active
  // const { data: getTermsInfo, isLoading: isPrivacyLoading } = useGetDashboardSettingApiQuery(
  //   activeTab === "privacy" ? "privacy" : "",
  //   { skip: activeTab !== "privacy" }
  // );

  // const PrivacyData = getTermsInfo?.data;
  // const initialContent = PrivacyData?.value || "";

  // useEffect(() => {
  //   console.log("Privacy Data:", getTermsInfo);
  // }, [getTermsInfo]);

  const isLoading = false;
  const isSubmit = false;
  const isFormValid = false;
  const isPrivacyLoading = false;
  const initialContent = '';

  // Define content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <>
            {isLoading ? (
              <div>
                <ProfileSkeleton />
              </div>
            ) : (
              <Form
                className="border rounded-lg p-4 md:p-6 space-y-4 pt-8"
                from={fromEdit}
                onSubmit={handleSubmit}
              >
                <div className="w-full flex flex-col justify-center items-center mt-5 mb-10">
                  {/* Image upload section */}
                  <div className="space-y-2">
                    {imagePreview ? (
                      <div className="flex flex-col justify-center items-center">
                        <div className="relative w-fit flex justify-end overflow-hidden border border-gray-800 rounded-lg ">
                          <Image
                            src={imagePreview}
                            alt="Room preview"
                            width={100}
                            height={100}
                            className="h-25 w-37.5 object-contain rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="cursor-pointer absolute rounded-full bg-red-500 p-1 text-white hover:bg-red-600 transition-colors"
                          >
                            <X className=" h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label htmlFor="roomImage">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-30 h-30 border-slate-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                            {profileImage && (
                              <Image
                                src={profileImage}
                                alt="photo"
                                className="w-25 h-25 object-cover rounded-full"
                                width={100}
                                height={100}
                              />
                            )}
                          </div>
                          <p className="text-white text-sm font-medium">
                            Upload your photo
                          </p>
                        </div>
                      </label>
                    )}

                    <input
                      type="file"
                      id="roomImage"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <FromInput
                  name="name"
                  placeholder="Enter your full name here"
                  icon={<UserInfIcon />}
                  className="h-12.5 rounded-md bg-secondary placeholder:text-muted-foreground"
                  stylelabel="text-lg"
                />

                <FromInput
                  name="phone_number"
                  type="number"
                  placeholder="Enter your phone number"
                  icon={<PhoneIpfIcon />}
                  className="h-12.5 bg-secondary rounded-md placeholder:text-muted-foreground"
                  stylelabel="text-lg"
                />

                <FromInput
                  name="address"
                  placeholder="Enter your address"
                  icon={<LocationFieldIcon />}
                  className="h-12.5 bg-secondary rounded-md placeholder:text-muted-foreground"
                  stylelabel="text-lg"
                />

                <div className="mt-10">
                  <CustomButton
                    text="Done"
                    isSubmit={isSubmit}
                    disabledValue={!isFormValid}
                  />
                </div>
              </Form>
            )}
          </>
        );

      case "terms":
        return (
          <>
            <TermsAndCondition />
          </>
        );

      case "privacy":
        return (
          <>
            {isPrivacyLoading ? (
              <div>Loading Privacy Policy...</div>
            ) : (
              <PrivacyPolicy content={initialContent} />
            )}
          </>
        );

      case "faq":
        return (
          <>
            <Faq />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Tabs Container - Responsive */}
      <div className=" mb-8">
        <div className=" w-full md:flex md:justify-end overflow-x-auto">
          <div className="flex min-w-max pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer flex flex-col items-center px-3 py-2  sm:text-sm text-2xl   font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "TextGradient font-semibold bg-linear-to-r from-[#FEAC1A] via-[#F84426] to-[#FEAC1A] inline-block text-transparent bg-clip-text underline underline-offset-4 decoration-[#FEAC1A]"
                    : "text-[#888888]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className=" h-[90%] overflow-y-auto">{renderTabContent()}</div>
    </>
  );
};

export default SettingPage;
