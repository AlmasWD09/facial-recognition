"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Suspense,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ClipboardEvent,
} from "react";
import { varify_sc } from "@/lib/schema";
import IconBox from "../resuable/Icon-box";
import SubTitle from "../shared/title/title";
import Form from "../resuable/from";
import { FromInput } from "../resuable/form-input";
import SpinnerCa from "../resuable/Spinner_ca";
import { ChangeIcon, ResetIcon3 } from "@/components/icon";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

function VarifyOtp() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // const [verifyOtpApi,] = useVerifyOtpApiMutation()
  // const [forgotPasswordApi] = useForgotPasswordApiMutation()

  const email = searchParams.get("email");

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
    // const fullOtp = otp.join("")
    // const formData = new FormData();
    // if (email) {
    //   formData.append("email", email);
    // }
    // formData.append("otp", fullOtp);
    // try {
    //   const res = await verifyOtpApi(formData).unwrap();
    //   const token = res?.data?.access_token
    //   const role = res?.data?.user?.role
    //   if (res?.status === 'success') {
    //     toast.success(res?.message)
    //     router.push(`/set-password?email=${email}`)
    //     setOtp(Array(6).fill(""));
    //     if (token) {
    //       Cookies.set('token', token); // expires in 7 days, set secure if you need HTTPS
    //     }
    //     if (role) {
    //       Cookies.set('role', role);
    //     }
    //   } else {
    //     toast.error(res?.messages)
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
    //   if (res?.status === 'success') {
    //     toast.success(res?.message)
    //   } else {
    //     toast.error(res?.messages)
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message); // Now you can safely access error.data.message
    //   }
    // }
  };

  const isResendLoading = false;

  return (
    <div className="h-screen flex justify-center items-center bg-secondary">
      <div className="w-11/12 lg:max-w-2xl bg-[#FFFFFF] rounded-figma-sm p-4 lg:p-10 my-30 mx-auto">
        <div className="pb-8">
          <SubTitle text="Verify your email" svg={false} />
          <p className="text-center text-[#989898]">
            We have sent 6 digit code into your email address
          </p>
        </div>

        <label htmlFor="" className="text-black text-base font-medium">Verify Otp</label>
        <div className="flex justify-center space-x-8 my-2">
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
                "w-20 h-16 text-center text-lg font-medium border-gray-300",
                "",
                digit && "",
              )}
            />
          ))}
        </div>


        <div className="mt-8">
          <Link href={"/auth/reset-password"}>
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
              className="cursor-pointer w-full rounded-sm  text-white h-11"
            >
              Verify
              {/* {isVerifyLoading ? <SpinnerCa /> : "Verify"} */}
            </Button>
          </Link>
        </div>

        <div className="mt-2 flex justify-end ">
          <button onClick={handleSendAgainOtp}>
            {isResendLoading ? (
              <div className="flex items-center gap-2">
                <SpinnerCa
                  svgClassName="text-primary"
                  textClassName="text-primary"
                />
              </div>
            ) : (
              <div className="text-figma-secondary cursor-pointer flex items-center justify-end space-x-2">
                <span className="ml-1 font-semibold TextGradientTwo">Send again</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VerifyCode() {
  return (
    <Suspense fallback={<SpinnerCa />}>
      <VarifyOtp />
    </Suspense>
  );
}
