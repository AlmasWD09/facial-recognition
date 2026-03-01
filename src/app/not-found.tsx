"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen bg-secondary flex justify-center items-center text-center">
      <div className="space-y-3">
        <div>
          <Image
            src="/404.png"
            alt="photo"
            width={500}
            height={500}
            className="w-75"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Oops</h2>
          <p className="text-gray-600">page not found</p>
        </div>

        <Button 
          onClick={() => router.back()}
          style={{
            background: "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
          }}
          className="cursor-pointer w-full rounded-sm  text-white h-11"
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
