"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  // const [loginApi, { isLoading }] = useLoginApiMutation();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submit
  const onSubmit: SubmitHandler<LoginFormInputs> = async (values) => {
    // console.log(values)

    router.push("/admin");

    // const formData = new FormData();
    // formData.append("email", values?.email);
    // formData.append("password", values?.password);
    // try {
    //   const res = await loginApi(formData).unwrap();
    //   const token = res?.access_token;
    //   const role = res?.role
    //   console.log(res)
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     if (token) {
    //       Cookies.set("token", token);
    //     }
    //     if (role) {
    //       Cookies.set("role", role);
    //     }
    //      router.push("/admin");
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message); // Now you can safely access error.data.message
    //   }
    // }
  };

  const handleNavigateForgot = () => {
    router.push("/dashboard/forgot-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-10 px-4">
        <CardHeader className="space-y-4 text-center pb-4">
          {/* Logo Image */}
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
            Log in to your account
          </h1>
          <p className="text-sm text-gray-600">
            Please enter your email and password to continue
          </p>
        </CardHeader>

        <CardContent>
          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

            <div className="flex flex-col relative">
              <Label htmlFor="password" className="text-[#636363] pb-1">
                Password
              </Label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="border p-2 rounded-lg w-full h-11"
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                })}
              />
              <div
                className="absolute right-2 top-[65%] transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox className="border-primary" id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember Password
                </Label>
              </div>
              <h1
                onClick={handleNavigateForgot}
                className="text-primary font-medium text-xs cursor-pointer"
              >
                Forgot Password?
              </h1>
            </div>

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
                className="cursor-pointer w-full rounded-sm  text-white h-11"
              >
                Sign in
              </Button>
              {/* <Button className="cursor-pointer w-full rounded-sm bg-primary text-white">
                {isLoading ? <SpinnerCa /> : "Sign in"}
              </Button> */}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
