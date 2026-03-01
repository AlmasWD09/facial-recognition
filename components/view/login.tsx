"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cookies from "js-cookie";
import Link from "next/link";
import { sign_In } from "@/lib/schema";

import { Suspense } from "react";
import SubTitle from "../shared/title/title";
import Form from "../resuable/from";
import { FromInput } from "../resuable/form-input";
import { EmailIcon, LockIcon } from "@/components/icon";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import SpinnerCa from "../resuable/Spinner_ca";

function Login() {
  const router = useRouter();
  const searchParems = useSearchParams();
  const pathUrl = searchParems.get("redirectTo");

  const from = useForm({
    resolver: zodResolver(sign_In),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    const loginInfo = {
      email: values.email,
    };

    const loginData = Cookies.get("loginInfo");
    const convertLoginData = loginData ? JSON.parse(loginData) : null;
    // console.log(convertLoginData)
    if (convertLoginData) {
      Cookies.remove("loginInfo");
    }
    Cookies.set("loginInfo", JSON.stringify(loginInfo));
    from.reset();
    router.push('/event-management')

    // const formData = new FormData();
    // formData.append("email", values?.email);
    // formData.append("password", values?.password);
    // try {
    //   const res = await loginApi(formData).unwrap();
    //   const token = res?.access_token;
    //   const role = res?.role;
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     if (token) {
    //       Cookies.set("token", token);
    //     }
    //     if (role) {
    //       Cookies.set("role", role);
    //     }
    //     if (pathUrl) {
    //       router.push(pathUrl);
    //     } else router.push(`/`);
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
    <div className="h-screen flex justify-center items-center bg-secondary">
      <div className="w-11/12 lg:max-w-2xl bg-[#FFFFFF] rounded-figma-sm p-4 lg:p-10 my-30 mx-auto">
        <div className="pb-8">
          <SubTitle text="Log in" svg={false} />
          <p className="text-center text-[#989898]">
            Give correct information for access your account.
          </p>
        </div>
        <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
          <FromInput
            className="h-11"
            name="email"
            placeholder="Write your email address..."
            icon={<EmailIcon />}
            label="Email"
          />

          <div>
            <FromInput
              className="h-11"
              name="password"
              placeholder="Password"
              eye={true}
              icon={<LockIcon />}
              label="Password"
            />

            <div className="flex items-center justify-between mt-2 text-sm">
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="font-normal">
                  <span className="TextGradientTwo">Remember me</span>
                </Label>
              </div>
              <Link href="/auth/forgot-password" className=" font-medium">
                <span className="TextGradientTwo">Forgot Password?</span>
              </Link>
            </div>
          </div>

          <div>
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
              Login
              {/* {isLoading ? <SpinnerCa /> : "Login"} */}
            </Button>
          </div>
        </Form>

        <div className="space-y-4 mt-10">
          <div className="text-center  text-figma-secondary">
            Don't have an account?
            <Link
              href="/auth/register"
              className="inline-flex items-center TextGradient pl-2 font-semibold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginSuspense() {
  return (
    <Suspense fallback={<SpinnerCa />}>
      <Login />
    </Suspense>
  );
}
