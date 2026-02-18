"use client";

import { useGlobalState } from "@/app/hooks";
import { DB_doted_Icon } from "@/components/icon";
import Form from "@/components/resuable/from";
import { FromTextArea } from "@/components/resuable/from-textarea";
import Modal from "@/components/resuable/modal";
import NotFound from "@/components/resuable/notFound";
import SpinnerCa from "@/components/resuable/Spinner_ca";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { add_user_action_sc } from "@/lib/schema";
import CustomPagination from "@/components/customPagination/CustomPagination";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateFormatter, FormattedTime } from "@/components/shared/dateFormate/dateFormate";
import CustomButton from "@/components/resuable/customButton/customButton";

interface GlobalState {
  isAdd: boolean;
  isEdit: boolean;
}

const intState: GlobalState = {
  isAdd: false,
  isEdit: false,
};

const userData = [
  {
    id: 1,
    profile_pic: "https://example.com/images/user1.jpg",
    name: "John Smith",
    email: "john.smith@example.com",
    ban_type: "Temporary",
    ban_reason: "Spamming comments",
    banned_until: "2024-12-31",
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    profile_pic: "https://example.com/images/user2.jpg",
    name: "Emma Johnson",
    email: "emma.j@example.com",
    ban_type: "Permanent",
    ban_reason: "Harassment and threats",
    banned_until: "Permanent",
    created_at: "2024-02-22T14:45:22Z",
  },
  {
    id: 3,
    profile_pic: "https://example.com/images/user3.jpg",
    name: "Robert Chen",
    email: "r.chen@example.com",
    ban_type: "Temporary",
    ban_reason: "Copyright infringement",
    banned_until: "2024-08-15",
    created_at: "2024-03-10T09:15:33Z",
  },
  {
    id: 4,
    profile_pic: "https://example.com/images/user4.jpg",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    ban_type: "Warning",
    ban_reason: "Minor policy violation",
    banned_until: "2024-07-01",
    created_at: "2024-01-28T16:20:10Z",
  },
  {
    id: 5,
    profile_pic: "https://example.com/images/user5.jpg",
    name: "David Wilson",
    email: "dwilson@example.com",
    ban_type: "Permanent",
    ban_reason: "Multiple accounts for abuse",
    banned_until: "Permanent",
    created_at: "2024-04-05T11:10:45Z",
  },
  {
    id: 6,
    profile_pic: "https://example.com/images/user6.jpg",
    name: "Sarah Miller",
    email: "sarah.m@example.com",
    ban_type: "Temporary",
    ban_reason: "Inappropriate content",
    banned_until: "2024-09-30",
    created_at: "2024-03-18T13:55:28Z",
  },
  {
    id: 7,
    profile_pic: "https://example.com/images/user7.jpg",
    name: "James Brown",
    email: "jbrown@example.com",
    ban_type: "Temporary",
    ban_reason: "False information spreading",
    banned_until: "2024-10-15",
    created_at: "2024-02-14T08:40:17Z",
  },
  {
    id: 8,
    profile_pic: "https://example.com/images/user8.jpg",
    name: "Lisa Taylor",
    email: "lisa.t@example.com",
    ban_type: "Permanent",
    ban_reason: "Fraudulent activity",
    banned_until: "Permanent",
    created_at: "2024-05-03T15:25:39Z",
  },
  {
    id: 9,
    profile_pic: "https://example.com/images/user9.jpg",
    name: "Michael Davis",
    email: "m.davis@example.com",
    ban_type: "Temporary",
    ban_reason: "Excessive self-promotion",
    banned_until: "2024-11-20",
    created_at: "2024-01-05T12:05:52Z",
  },
  {
    id: 10,
    profile_pic: "https://example.com/images/user10.jpg",
    name: "Jennifer Lee",
    email: "j.lee@example.com",
    ban_type: "Warning",
    ban_reason: "Minor community guideline breach",
    banned_until: "2024-06-25",
    created_at: "2024-04-20T17:35:44Z",
  },
];

const UserManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [userModal, setUserModal] = useGlobalState(intState);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [selectValue, setSelctValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const form = useForm({
    resolver: zodResolver(add_user_action_sc),
    defaultValues: {
      ban_type: "",
      reason: "",
    },
  });

  const isFormValid = form.formState.isValid;

  // get all data
  const totalItems = 20;
  const totalPages = Math.ceil(totalItems / perPage);

  const singleUserData = userData.find((user) => user.id !== detailsId);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSelect = (value: string) => {
    setSelctValue(value);
  };

  // Submit form
  const handleSubmit = async (values: FieldValues) => {



    // const formData = new FormData();
    // formData.append("type", values.ban_type);
    // formData.append("reason", values.reason);
    // try {
    //   const res = await userBanApi({
    //     id: detailsId,
    //     banReasonInfo: formData,
    //   }).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     await refetch();
    //     form.reset();
    //     setUserModal("isAdd", false);
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

  // useEffect(() => {
  //   refetch();
  // }, [currentPage, perPage, searchText, refetch]);

  const isSubmit = true;

  return (
    <>
      <div className="w-full p-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by user name or email"
            className="lg:w-[40%] pl-10 pr-4 py-3 border rounded-lg"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {userData?.length > 0 ? (
        <>
          <div className="border rounded-lg  mt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      User Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                     User Creation Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 flex items-center gap-2">
                        <Image
                          src={"/adminPhoto.png"}
                          alt="photo"
                          width={40}
                          height={40}
                          className="w-6 h-6 object-cover rounded-full"
                        />
                        {item.name}
                      </td>

                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">
                          <DateFormatter date={item.created_at} />
                        </td>
                      <td className="px-6 py-4">
                        <FormattedTime timestamp={item.created_at} />
                      </td>
                      <td className="px-6 py-4">
                        <DB_doted_Icon
                          onClick={() => {
                            setUserModal("isAdd", true);
                            setDetailsId(item?.id);
                          }}
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Component */}
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />

            <Modal
              open={userModal.isAdd}
              setIsOpen={(v: any) => setUserModal("isAdd", v)}
              title="Take Action"
              subtitle={
                <div>
                  <span className="text-xs font-normal text-[#989898]">
                    You can take action like ban the user.
                  </span>
                </div>
              }
              titleStyle="text-start"
              className="sm:max-w-xl"
            >
              <div className="">
                {/* {singleUserData?.ban_type !== null && ( */}
                {/* <div className="border border-red-500 bg-secondary rounded-lg p-4">
                  <div>
                    <p>{singleUserData?.ban_type}</p>
                    <p>{singleUserData?.banned_until}</p>
                    <div className="mt-6">
                      <p className="text-xl font-medium">Reasone : </p>
                      <p>{singleUserData?.ban_reason}</p>
                    </div>
                  </div>
                </div> */}
                {/* )} */}

                <Form
                  className="space-y-5 mt-16"
                  from={form}
                  onSubmit={handleSubmit}
                >
                  <div
                    className={``}
                    // className={`${singleUserData?.ban_type !== null ? "pointer-events-none opacity-50" : ""}`}
                  >
                    <h1 className="font-semibold pb-2">Select any one</h1>
                    <div className="flex flex-col space-y-4 mt-4">
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="ban_permanently"
                          {...form.register("ban_type")}
                          className="shrink-0 w-5 4 h-5 rounded-lg border-red-500 focus:ring-0 cursor-pointer"
                          onChange={(e) => handleSelect(e.target.value)}
                        />
                        <p
                          className={`${selectValue === "ban_permanently" ? "font-semibold   TextGradient" : "font-semibold"}`}
                        >
                          Ban permanently.
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="ban_for_one_week"
                          {...form.register("ban_type")}
                          className="shrink-0 w-5 4 h-5 rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                          onChange={(e) => handleSelect(e.target.value)}
                        />
                        <p
                          className={`${selectValue === "ban_for_one_week" ? "font-semibold   TextGradient" : "font-semibold"}`}
                        >
                          Ban for one week.
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="ban_for_one_month"
                          {...form.register("ban_type")}
                          className="shrink-0 w-5 4 h-5 rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                          onChange={(e) => handleSelect(e.target.value)}
                        />
                        <p
                          className={`${selectValue === "ban_for_one_month" ? "font-semibold   TextGradient" : "font-semibold"}`}
                        >
                          Ban for one month.
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="ban_for_one_year"
                          {...form.register("ban_type")}
                          className="shrink-0 w-5 4 h-5 rounded-lg border-gray-300 focus:ring-0 cursor-pointer"
                          onChange={(e) => handleSelect(e.target.value)}
                        />
                        <p
                          className={`${selectValue === "ban_for_one_year" ? "font-semibold   TextGradient" : "font-semibold"}`}
                        >
                          Ban for one year.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FromTextArea
                      label="Reason"
                      name="reason"
                      placeholder="Write the reason for ban..."
                      className="min-h-30 bg-secondary rounded-[10px]"
                      // disabled={singleUserData?.ban_type !== null}
                    />
                  </div>

                  <div>
                    <CustomButton
                      text="Done"
                      isSubmit={isSubmit}
                      disabledValue={!isFormValid}
                      // icon={true}
                    />
                  </div>
                </Form>
              </div>
            </Modal>
          </div>
        </>
      ) : (
        <>
          <NotFound text="User" />
        </>
      )}
    </>
  );
};

export default UserManagement;
