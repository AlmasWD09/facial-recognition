"use client";

import { DB_doted_Icon, DB_eye_Icon } from "@/components/icon";
import CustomPagination from "@/components/customPagination/CustomPagination";
import NotFound from "@/components/resuable/notFound";
import { DateFormatter, FormattedTime } from "@/components/shared/dateFormate/dateFormate";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const eventData = [
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

const EventManagement = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;


  // get all data
  const totalItems = 20;
  const totalPages = Math.ceil(totalItems / perPage);



  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleNavigate = (id :number) =>{
router.push(`/admin/event-management/${id}`)
  }

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
      {eventData?.length > 0 ? (
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
                     Event Creation Date
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
                  {eventData?.map((item, index) => (
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
                        <DB_eye_Icon 
                        onClick={()=> handleNavigate(item.id)}
                        className="cursor-pointer" />
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
          <NotFound text="Event" />
        </>
      )}
    </>
  );
};

export default EventManagement;
