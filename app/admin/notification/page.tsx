"use client";

import FavIcon from "@/app/favicon/favicon";
import CustomPagination from "@/components/customPagination/CustomPagination";
import IconBox from "@/components/resuable/Icon-box";
import NotFound from "@/components/resuable/notFound";
import { DateFormatter, FormattedTime } from "@/components/shared/dateFormate/dateFormate";
import { useState } from "react";



interface NotificationItem {
  id: string;
  read_at: string | null;
  created_at: string;
  data: {
    message: string;
  };
}

const notificationData = [
  {
    "id": "1",
    "read_at": null,
    "created_at": "2026-02-01T10:00:00Z",
    "data": {
      "message": "Your order has been shipped!"
    }
  },
  {
    "id": "2",
    "read_at": "2026-02-01T10:10:00Z",
    "created_at": "2026-02-01T09:50:00Z",
    "data": {
      "message": "You have a new message from John Doe."
    }
  },
  {
    "id": "3",
    "read_at": null,
    "created_at": "2026-02-02T12:00:00Z",
    "data": {
      "message": "Your subscription will expire soon."
    }
  },
  {
    "id": "4",
    "read_at": "2026-02-01T10:15:00Z",
    "created_at": "2026-02-01T10:00:00Z",
    "data": {
      "message": "Your account settings have been updated."
    }
  },
  {
    "id": "5",
    "read_at": null,
    "created_at": "2026-02-01T11:00:00Z",
    "data": {
      "message": "Reminder: You have an upcoming meeting tomorrow."
    }
  },
  {
    "id": "6",
    "read_at": "2026-02-01T10:20:00Z",
    "created_at": "2026-02-01T10:05:00Z",
    "data": {
      "message": "Your payment has been successfully processed."
    }
  },
  {
    "id": "7",
    "read_at": null,
    "created_at": "2026-02-02T13:00:00Z",
    "data": {
      "message": "New comment on your post."
    }
  },
  {
    "id": "8",
    "read_at": null,
    "created_at": "2026-02-02T14:00:00Z",
    "data": {
      "message": "Your profile has been viewed."
    }
  },

]


const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

//   const { data: getNotification, refetch } = useGetNotificationApiQuery({
//     per_page: perPage,
//     page: currentPage,
//   });
//   const notificationData: NotificationItem[] = getNotification?.data?.data;


//   const totalItems = getNotification?.data?.total;
//   const totalPages = Math.ceil(totalItems / perPage);

  // get all data
  const totalItems = 12;
  const totalPages = Math.ceil(totalItems / perPage);

//   const [singleReadNotifiApi] = useSingleReadNotifiApiMutation();

  const handleRead = async (id: string) => {
    // try {
    //   const res = await singleReadNotifiApi(id).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     await refetch();
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

//   useEffect(() => {
//     refetch();
//   }, [currentPage, perPage, refetch]);

  return (
    <>
      {notificationData && notificationData.length > 0 ? (
        <>
          <div className="container px-4">
            <div className="space-y-3">
              {notificationData?.map((item, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between 
                       bg-muted/50 py-4 px-4 rounded-lg gap-4 sm:gap-0`}
                >
                  {/* LEFT SIDE */}
                  <div className="flex items-start sm:items-center gap-4">
                    <IconBox>
                      <FavIcon name="noti" />
                    </IconBox>

                    <div className="flex flex-col">
                      <span
                        className={`font-medium ${
                          item.read_at === null ? "text-green-400"
                            : ""
                        }`}
                      >
                        {item?.data?.message}
                      </span>

                      {item.read_at === null ? (
                        <>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            {/* <span>Tap to give review</span> */}
                            {/* <span className="w-2 h-2 rounded-full bg-gray-400"></span> */}
                            <span className="flex items-center gap-2">
                              {" "}
                              <DateFormatter date={item?.created_at} />
                              <FormattedTime timestamp={item.created_at} />
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <DateFormatter date={item?.created_at} />
                              <FormattedTime timestamp={item.created_at} />
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* RIGHT SIDE ICON */}
                  <div className="text-foreground flex sm:block justify-end w-full sm:w-auto">
                    {item.read_at === null ? (
                      <FavIcon
                        onClick={() => handleRead(item.id)}
                        name="message_read"
                        className="cursor-pointer"
                      />
                    ) : (
                      <FavIcon name="message_unread" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-end">
              {/* PAGINATION COMPONENT */}
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <NotFound text="Notification" />
        </>
      )}
    </>
  );
};

export default Notification;
