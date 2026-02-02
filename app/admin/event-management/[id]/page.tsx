
"use client";

import BackButton from "@/components/shared/back-button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const galleryData = [
  { id: 1, image: "/gallery/photo01.png" },
  { id: 2, image: "/gallery/photo02.png" },
  { id: 3, image: "/gallery/photo03.png" },
  { id: 4, image: "/gallery/photo04.png" },
  { id: 5, image: "/gallery/photo05.png" },
  { id: 6, image: "/gallery/photo06.png" },
  { id: 7, image: "/gallery/photo07.png" },
  { id: 8, image: "/gallery/photo08.png" },
];

const EventDetails = () => {
  const router = useRouter();

  // Pattern layout - Width varies, height same
  const getLayoutClass = (index: number) => {
    const patterns = [
      "col-span-3", // Narrow
      "col-span-6", // Wide
      "col-span-3", // Narrow
      "col-span-4", // Medium
      "col-span-5", // Medium-wide
      "col-span-3", // Narrow
      "col-span-5", // Medium-wide
      "col-span-4", // Medium
      "col-span-3", // Narrow
    ];

    return patterns[index % patterns.length];
  };

  return (
    <div className="pb-10">
      <BackButton
        text="Back"
        onClick={() => router.back()}
        className="text-lg px-4 rounded-lg"
      />

      {/* Event Header */}
      <div className="bg-[#f2f2f2] flex justify-between items-center p-3 rounded-2xl mt-4">
        <div className="flex items-center gap-2">
          <div>
            <span>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.0091 2.28564C25.7554 2.28564 20.6994 2.47307 15.4697 2.83422C12.7874 3.01348 10.2621 4.16333 8.36577 6.06889C6.46946 7.97445 5.33191 10.5053 5.16571 13.1885C4.77509 19.4514 4.57995 25.7249 4.58057 31.9999C4.58057 38.4456 4.78171 44.7359 5.16571 50.8114C5.33191 53.4945 6.46946 56.0254 8.36577 57.931C10.2621 59.8365 12.7874 60.9864 15.4697 61.1656C20.6994 61.5268 25.7554 61.7142 32.0091 61.7142C38.2674 61.7142 43.3234 61.5268 48.5531 61.1656C51.2355 60.9864 53.7608 59.8365 55.6571 57.931C57.5534 56.0254 58.6909 53.4945 58.8571 50.8114C59.4085 41.9694 59.5702 33.1075 59.3417 24.2514C59.2927 22 58.5522 19.8182 57.2206 18.0022C53.0926 12.3748 49.7417 8.80907 44.2743 4.58964C42.4315 3.17846 40.1858 2.39356 37.8651 2.34964C35.915 2.30715 33.9598 2.28582 32.0091 2.28564Z"
                  fill="#8FBFFA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.4195 28.6627C55.4972 23.2089 49.0103 22.3129 43.7349 22.3495C39.9452 22.3769 36.8823 19.5838 36.8823 15.7987V2.32666L37.8652 2.34952C40.1692 2.39523 42.4229 3.16323 44.2743 4.58952C49.7418 8.80895 53.0926 12.3747 57.2206 18.0021C58.56 19.8261 59.2869 22.0112 59.3418 24.2467C59.3783 25.7095 59.4012 27.1815 59.4195 28.6627Z"
                  fill="#2859C5"
                />
              </svg>
            </span>
          </div>
          <div>
            <h1 className="font-semibold">Secondary Title</h1>
            <p className="text-[#989898]">Event location</p>
          </div>
        </div>

        <div>
          <p className="text-[#989898]">12/25/2026</p>
        </div>
      </div>

      {/* Gallery Section - Same Height, Different Width */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>

        <div className="grid grid-cols-12 gap-3">
          {galleryData?.map((item, index) => (
            <div
              key={item.id}
              className={`${getLayoutClass(
                index
              )} relative h-95 rounded-2xl overflow-hidden group cursor-pointer bg-gray-100`}
            >
              <Image
                src={item.image}
                alt={`Gallery ${item.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;