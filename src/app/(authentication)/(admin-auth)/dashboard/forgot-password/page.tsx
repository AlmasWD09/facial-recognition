"use client";


import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type ForgotInput = {
  email: string;
  password: string;
};

interface ApiError {
  data: {
    message: string;
  };
}

export default function ForgotPassword() {
  const router = useRouter();

  // const [forgotPasswordApi, { isLoading }] = useForgotPasswordApiMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotInput>();

  // Handle form submit
  const onSubmit: SubmitHandler<ForgotInput> = async (values) => {
    // console.log(values)
    router.push("/dashboard/verify-otp");

    // const formData = new FormData();
    // formData.append("email", values?.email);
    // try {
    //   const res = await forgotPasswordApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     router.push(`/dashboard/verify-otp?text=forgot&email=${values?.email}`);
    //   } else {
    //     toast.error(res?.message);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20 px-4">
        <CardHeader className="space-y-2 text-center pb-4">
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className="w-[120px]  object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-black">
            Forgot password ?
          </h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <Label htmlFor="email" className="text-[#636363] pb-1">
                Email
              </Label>
              <input
                type="email"
                id="email"
                className="border p-2 rounded-lg h-11"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex justify-center mt-4">
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
                className="cursor-pointer w-full rounded-sm bg-primary text-[#ffff] h-11"
              >
                Send Code
              </Button>
              {/* <Button className="cursor-pointer w-full rounded-sm bg-primary text-[#ffff]">
                {isLoading ? <SpinnerCa /> : "Send Code"}
              </Button> */}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
