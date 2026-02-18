"use client";

import {
  Faq_ic_Icon,
  Faq_icc_Icon,
  LockIcon,
  Logout_ic_Icon,
  Mail_ic_Icon,
  Upload_ic_Icon,
  User_ic_Icon,
  UserIcon,
} from "@/components/icon";
import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import BackButton from "@/components/shared/back-button";
import { useGlobalState } from "@/app/hooks";
import Modal from "@/components/resuable/modal";
import { Button } from "@/components/ui/button";
import { FromInput } from "@/components/resuable/form-input";
import Form from "@/components/resuable/from";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { new_Pass, profile_change, profile_change_Pass } from "@/lib/schema";
import Modal2 from "@/components/resuable/modal2";

const faqList = [
  {
    q: "Why do we use it?",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    q: "Where can I get some?",
    a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    q: "Why is Lorem Ipsum important?",
    a: "It is important for typesetting and printing because it provides a visual placeholder text that is readable yet not distracting.",
  },
  {
    q: "Can I use Lorem Ipsum for design purposes?",
    a: "Yes, Lorem Ipsum can be used in design to mock up a page without focusing on the content itself, allowing designers to focus on layout and typography.",
  },
  {
    q: "Who uses Lorem Ipsum?",
    a: "Lorem Ipsum is commonly used by graphic designers, web developers, and print media professionals who require placeholder text to fill space in designs.",
  },
  {
    q: "What are some alternatives to Lorem Ipsum?",
    a: "Some alternatives to Lorem Ipsum include 'Cicero Ipsum' or 'Hipster Ipsum,' which can provide more themed or unique placeholder text.",
  },
];

interface GlobalState {
  isAdd: boolean;
  isEdit: boolean;
}

const intState: GlobalState = {
  isAdd: false,
  isEdit: false,
};

const SettingsPage = () => {
  const router = useRouter();
  const [userModal, setUserModal] = useGlobalState(intState);
  const [editProfileModal, setEditProfileModal] = useGlobalState(intState);
  const [activeTab, setActiveTab] = useState("personal");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const passChangeFrom = useForm({
    resolver: zodResolver(profile_change_Pass),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  });


  const editProfileFrom = useForm({
    resolver: zodResolver(profile_change),
    defaultValues: {
      name: "",
    },
  });

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Image file upload handler
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setImageFile(file);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleNavigateEventPage = () => {
    router.push("/event-management");
  };

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "faq", label: "FAQ" },
  ];

  const handleSubmitPassword = async (values: FieldValues) => {
    // console.log(values);
  };
  const handleSubmitEditProfile = async (values: FieldValues) => {
    // console.log(values);
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
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
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto py-2 mt-2 md:mt-0">
            <button
            onClick={()=> router.push('/subscription-management')}
              style={{
                background:
                  "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
              }}
              className="cursor-pointer flex items-center gap-2 w-fit md:w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-medium "
            >
              Subscription
            </button>
            <button
              onClick={() => router.push("/settings")}
              className="cursor-pointer flex items-center gap-2 w-fit md:w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-medium "
              style={{
                background:
                  "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
              }}
            >
              Log out
              <Logout_ic_Icon />
            </button>
          </div>
        </div>

        {/* Gradient Border Card */}
        <div className="px-2 sm:px-0">
          <div
            className={`bg-[#fff7f4]/60 shadow rounded-2xl p-3 sm:p-4 md:p-6 min-h-[calc(100vh-140px)]`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="">
                <BackButton
                  text="Back"
                  onClick={() => router.back()}
                  className="text-base sm:text-lg px-3 sm:px-4 rounded-lg"
                />
              </div>
              <div className="w-full lg:w-auto overflow-x-auto">
                <div className="flex gap-2 sm:gap-4 min-w-max lg:min-w-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? "TextGradientTwo border-b-2 border-[#F84426]"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 px-4">
              {activeTab === "personal" && (
                <div className=" mt-20 md:mt-36 flex flex-col justify-center items-center max-w-2xl mx-auto">
                  {/* Profile Image */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-linear-to-br from-orange-100 to-red-100">
                      <Image
                        src={previewImage || "/profile-photo01.png"}
                        alt="Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hidden file input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />

                    {/* Upload button */}
                    <button
                      onClick={handleUploadClick}
                      className="cursor-pointer absolute -bottom-2 -right-4 w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-r from-[#FEAC1A] to-[#F84426] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                      style={{
                        background:
                          "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                      }}
                    >
                      <Upload_ic_Icon />
                    </button>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <User_ic_Icon />
                    <span className="text-sm sm:text-base text-[#989898] font-medium">
                      Michel Grabhy
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-6 sm:mb-8">
                    <Mail_ic_Icon />
                    <span className="text-sm sm:text-base text-[#989898]">
                      michel000@gmail.com
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 sm:px-0">
                    {/* Change password */}
                    <div className="flex-1 inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
                      <button
                        type="button"
                        onClick={() => {
                          setUserModal("isAdd", true);
                        }}
                        className="w-full cursor-pointer rounded-lg bg-white px-4 py-2 font-medium text-center"
                      >
                        <span className="text-[#989898]">Change password</span>
                      </button>
                    </div>

                    {/* Edit profile */}
                    <button
                      onClick={() => {
                        setEditProfileModal("isAdd", true);
                      }}
                      className="cursor-pointer flex-1 w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-white font-medium"
                      style={{
                        background:
                          "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                      }}
                    >
                      Edit profile
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "terms" && (
                <div className="py-8 sm:py-12 md:py-16">
                  <div className="">
                    <h2 className="text-base md:text-2xl font-bold mb-8 text-gray-900">
                      Terms & Conditions
                    </h2>

                    {/* Section 1 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        1. Using our service
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        2. Your account
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        3. Payment procedure
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "privacy" && (
                <div className="py-8 sm:py-12 md:py-16">
                  <div className="">
                    <h2 className="text-base md:text-2xl font-bold mb-8 text-gray-900">
                      Privacy Policy
                    </h2>

                    {/* Section 1 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        1. Using our service
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        2. Your account
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-6">
                      <h3 className="text-base font-bold mb-3 text-gray-900">
                        3. Payment procedure
                      </h3>
                      <p className="text-sm leading-relaxed text-[#989898]">
                        Lorem ipsum dolor sit amet consectetur. Volutpat purus
                        nunc tellus lorem adipiscing. Convallis at mi dictumst
                        nulla amet. Ipsum consequat vel donec ut arnet ante
                        semper. Amet tempus tellus aliquam volutpat enim dolor
                        tristique.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="py-8 sm:py-12 md:py-16">
                  <div className="">
                    <h2 className="text-base md:text-2xl font-bold mb-8 text-gray-900">
                      Frequently Asked Questions (FAQ)
                    </h2>

                    <div className="">
                      <div className="flex flex-col">
                        <div className="">
                          <div className="space-y-2">
                            {faqList.map((item, index) => (
                              <div
                                key={index}
                                className={`rounded-xl overflow-hidden transition-all duration-200 ${
                                  activeIndex === index
                                    ? "border-2 border-transparent bg-gradient-to-r from-[#FEAC1A] to-[#F84426] bg-origin-border"
                                    : "bg-gray-50 border border-transparent"
                                }`}
                              >
                                {/* Gradient border wrapper */}
                                <div
                                  className={`rounded-xl overflow-hidden ${
                                    activeIndex === index ? "bg-white" : ""
                                  }`}
                                >
                                  <button
                                    className={`w-full p-5 flex justify-between items-center transition-colors duration-200 text-left ${
                                      activeIndex === index
                                        ? "bg-white "
                                        : "bg-gray-50 "
                                    }`}
                                    onClick={() => toggleItem(index)}
                                  >
                                    <span
                                      className={`flex-1 text-base font-semibold pr-3 ${
                                        activeIndex === index
                                          ? ""
                                          : "text-gray-800"
                                      }`}
                                    >
                                      {item.q}
                                    </span>
                                    <span className="text-xl font-bold cursor-pointer">
                                      {activeIndex === index ? (
                                        <span>
                                          <Faq_ic_Icon />
                                        </span>
                                      ) : (
                                        <span>
                                          <Faq_icc_Icon />
                                        </span>
                                      )}
                                    </span>
                                  </button>

                                  {activeIndex === index && (
                                    <div className="px-5 pb-5 bg-white animate-fade-in">
                                      <p className="text-gray-600 leading-6 text-sm">
                                        {item.a}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* change password */}
      <Modal
        open={userModal.isAdd}
        setIsOpen={(v: any) => setUserModal("isAdd", v)}
        title="Change Password"
        subtitle={
          <div>
            <span className="text-xs font-normal text-[#989898]">
              If you want to change your password, you have to fill all of the
              information.
            </span>
          </div>
        }
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div className="">
          <Form
            className="space-y-4 pt-8"
            from={passChangeFrom}
            onSubmit={handleSubmitPassword}
          >
            <div>
              <FromInput
                className="h-11"
                name="current_password"
                placeholder="Password"
                eye={true}
                icon={<LockIcon />}
                label="Current Password"
              />
            </div>

            <div>
              <FromInput
                className="h-11"
                name="new_password"
                placeholder="Password"
                eye={true}
                icon={<LockIcon />}
                label="New Password"
              />
            </div>
            <div>
              <FromInput
                className="h-11"
                name="confirm_password"
                placeholder="Password"
                eye={true}
                icon={<LockIcon />}
                label="Confirm Password"
              />
            </div>

            <div>
              <Button
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
                Update Passoword
                {/* {isLoading ? <SpinnerCa /> : "Update Passoword"} */}
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      {/* edit profile */}
      <Modal2
        open={editProfileModal.isAdd}
        setIsOpen={(v: any) => setEditProfileModal("isAdd", v)}
        title="Edit Profile"
        subtitle={
          <div>
            <span className="text-xs font-normal text-[#989898]">
              You can only your name.
            </span>
          </div>
        }
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div className="">
          <Form
            className="space-y-4 pt-8"
            from={editProfileFrom}
            onSubmit={handleSubmitEditProfile}
          >
            <div>
              <FromInput
                className="h-11"
                name="name"
                placeholder="Write your full name..."
                icon={<UserIcon />}
                label="Full name"
              />
            </div>

            <div>
              <Button
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
                Update
                {/* {isLoading ? <SpinnerCa /> : "Update"} */}
              </Button>
            </div>

            <div className="w-full inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <button
                type="button"
                onClick={() => {
                  setEditProfileModal("isAdd", false);
                }}
                className="w-full cursor-pointer rounded-lg bg-white px-4 py-2 font-medium text-center"
              >
                <span className="text-[#989898]">Cancel</span>
              </button>
            </div>
          </Form>
        </div>
      </Modal2>
    </div>
  );
};

export default SettingsPage;
