"use client";

import { DB_eye_Icon } from "@/src/components/icon";
import CustomPagination from "@/src/components/customPagination/CustomPagination";
import NotFound from "@/src/components/resuable/notFound";
import {
  DateFormatter,
  FormattedTime,
} from "@/src/components/shared/dateFormate/dateFormate";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SubscriptionData = [
  {
    id: 1,
    profile_pic: "https://example.com/images/user1.jpg",
    name: "John Smith",
    email: "john.smith@example.com",
    ban_type: "Temporary",
    ban_reason: "Spamming comments",
    banned_until: "2024-12-31",
    created_at: "2024-01-15T10:30:00Z",
    event: "Monthly", // Added event field
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
    event: "Per Event", // Added event field
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
    event: "Monthly", // Added event field
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
    event: "Per Event", // Added event field
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
    event: "Monthly", // Added event field
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
    event: "Per Event", // Added event field
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
    event: "Monthly", // Added event field
  },
];

const PaymentMonetization = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  // get all data
  const totalItems = 20;
  const totalPages = Math.ceil(totalItems / perPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* first card */}
        <div className="relative h-44.25 lg:h-auto  rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
          <div className="h-full w-full bg-white rounded-lg p-6">
            <h1 className="font-semibold text-[28px] text-center TextGradientTwo">
              $50/Monthly
            </h1>
            <ul className="list-disc space-y-3 pl-6 mt-6">
              <li className="text-[#989898]">Unlimited events</li>
              <li className="text-[#989898]">$0.05 a photo</li>
            </ul>
          </div>
        </div>

        {/* second card */}
        <div className="relative h-44.25 lg:h-auto  rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
          <div className="h-full w-full bg-white rounded-lg p-6">
            <h1 className="font-semibold text-[28px] text-center TextGradientTwo">
              $20/Events
            </h1>
            <ul className="list-disc space-y-3 pl-6 mt-6">
              <li className="text-[#989898]">100 photos free upload</li>
              <li className="text-[#989898]">
                Various Prices depending on how many photos
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* search */}
      <div className="w-full mt-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by user name or email"
            className="lg:w-[32%] pl-10 pr-4 py-3 border rounded-lg"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {SubscriptionData?.length > 0 ? (
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
                      Package
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Purchase date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Purchase Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SubscriptionData?.map((item, index) => (
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
                      <td className="px-6 py-4">{item.event}</td>
                      <td className="px-6 py-4">
                        <DateFormatter date={item.created_at} />
                      </td>
                      <td className="px-6 py-4">
                        <FormattedTime timestamp={item.created_at} />
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
          </div>
        </>
      ) : (
        <>
          <NotFound text="Subscription" />
        </>
      )}
    </>
  );
};

export default PaymentMonetization;
