"use client";
import SpinnerCa from "@/src/components/resuable/Spinner_ca";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ClipboardEvent,
  useRef,
  Suspense,
} from "react";

interface ApiError {
  data: {
    message: string;
  };
}

function SuspendVerification() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // const [verifyOtpApi] = useVerifyOtpApiMutation();
  // const [forgotPasswordApi] = useForgotPasswordApiMutation();

  const email = "example@gmail.com";

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  // verify otp code function
  const handleVerify = async () => {
    // console.log(otp);
    router.push("/dashboard/reset-password");

    
    // const formData = new FormData();
    // if (email) {
    //   formData.append("email", email);
    // }
    // formData.append("otp", fullOtp);

    // try {
    //   const res = await verifyOtpApi(formData).unwrap();
    //   const token = res?.access_token;
    //   const role = res?.role

    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     router.push(`/dashboard/reset-password?email=${email}`);
    //     setOtp(Array(6).fill(""));

    //     if (token) {
    //       Cookies.set("token", token);
    //     }
    //     if (role) {
    //       Cookies.set("role", role);
    //     }
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message); // Now you can safely access error.data.message
    //   }
    // }
  };

  // send again otp code function
  const handleSendAgainOtp = async () => {
    // const formData = new FormData();
    // if (email) {
    //   formData.append("email", email);
    // }
    // try {
    //   const res = await forgotPasswordApi(formData).unwrap();
    //   if (res?.status === "success") {
    //     toast.success(res?.message);
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message); // Now you can safely access error.data.message
    //   }
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg py-20 bg-[#636363]/0.5 px-4">
        <CardHeader className="text-center space-y-2 pb-4">
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className="w-30  object-cover"
            />
          </div>
          <h1 className="text-2xl font-semibold text-black">
            Verification code
          </h1>
          <p className="text-sm text-gray-600 max-w-xs mx-auto">
            We sent a reset link to{" "}
            <span className="font-medium">example@gmail.com</span>. Enter the
            6-digit code.
          </p>
        </CardHeader>

        <CardContent>
          <div className="flex justify-center space-x-2 md:space-x-3 mb-2">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                className={cn(
                  "w-16 h-12 md:w-20 md:h-16 text-center text-lg font-medium border-gray-300",
                  "",
                  digit && "",
                )}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleVerify}
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
              className="cursor-pointer w-full rounded-sm bg-primary text-[#ffff] h-11 mt-4"
              disabled={otp.some((digit) => digit === "")}
            >
              Verify Code
            </Button>
            {/* <Button
              onClick={handleVerify}
              className="cursor-pointer w-full rounded-sm bg-primary text-[#ffff] mt-4"
            >
              Verify Code
            </Button> */}
          </div>

          <p className="text-sm text-center text-gray-600 mt-4">
            Didn&apos;t receive the email?{" "}
            <button
              onClick={handleSendAgainOtp}
              className="text-primary/70 underline cursor-pointer"
            >
              Resend
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

const VerifiyOtp = () => {
  return (
    <Suspense
      fallback={
        <div className="h-[50vh] flex justify-center items-center">
          <SpinnerCa />
        </div>
      }
    >
      <SuspendVerification />
    </Suspense>
  );
};

export default VerifiyOtp;
