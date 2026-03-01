"use client";

import { Suspense } from "react";
import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

type CreateNewPasswordInputs = {
  password: string;
  password_confirmation: string;
  terms: boolean;
};

interface ApiError {
  data: {
    message: string;
  };
}

function ResetPasswordContent() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  // const [resetPasswordApi, { isLoading }] = useResetPasswordApiMutation();
  const router = useRouter();
  // const params = useSearchParams();
  // const email = params?.get("email");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateNewPasswordInputs>();

  const passwordValue = watch("password");

  const onSubmit: SubmitHandler<CreateNewPasswordInputs> = async (values) => {
    console.log(values)
    router.push("/dashboard/login")


    // const formData = new FormData();
    // formData.append("email", email as string);
    // formData.append("password", values?.password);
    // formData.append("password_confirmation", values?.password_confirmation);
    // try {
    //   const res = await resetPasswordApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     router.push("/dashboard/login");
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
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20">
        <CardHeader className="space-y-2 text-center pb-4">
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className="w-30 object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-black">
            Set a new password
          </h1>
          <p className="text-sm text-gray-600 max-w-xs mx-auto font-normal">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4 px-6 pb-6">
              {/* New Password */}
              <div className="grid gap-2">
                <div className="relative">
                  <Label htmlFor="password" className="text-black pb-1">
                    New Password
                  </Label>
                  <Input
                    id="password"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="border p-2 rounded-lg w-full h-11"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="cursor-pointer absolute right-3 top-[65%] -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Retype Password */}
              <div className="space-y-2">
                <div className="relative">
                  <Label
                    htmlFor="password_confirmation"
                    className="text-black pb-1"
                  >
                    Retype Password
                  </Label>
                  <Input
                    id="password_confirmation"
                    type={showRetypePassword ? "text" : "password"}
                    placeholder="Enter your retype Password"
                    className="border p-2 rounded-lg w-full h-11"
                    {...register("password_confirmation", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === passwordValue || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRetypePassword(!showRetypePassword)}
                    className="cursor-pointer absolute right-3 top-[65%] -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showRetypePassword ? (
                      <EyeOff className="h-4 w-4 " />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
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
                  className="cursor-pointer w-full rounded-sm bg-primary text-white h-11"
                >
                  Update Password
                </Button>

                {/* <Button className="cursor-pointer w-full rounded-sm bg-primary text-white">
                  {isLoading ? <SpinnerCa /> : "Update Password"}
                </Button> */}
              </div>
            </CardContent>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-lg py-20">
            <div className="bg-[#636363]/0.5 rounded-lg">
              {/* Header skeleton */}
              <div className="space-y-2 text-center pb-4 px-6 pt-6">
                <div className="flex justify-center animate-pulse">
                  <div className="w-[120px] h-[120px] bg-gray-200 rounded"></div>
                </div>
                <div className="animate-pulse">
                  <div className="h-8 w-48 mx-auto bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-full max-w-xs mx-auto bg-gray-100 rounded"></div>
                </div>
              </div>

              {/* Form skeleton */}
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="animate-pulse">
                      <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                      <div className="h-10 bg-gray-100 rounded"></div>
                    </div>
                  ))}
                  <div className="animate-pulse pt-4">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
