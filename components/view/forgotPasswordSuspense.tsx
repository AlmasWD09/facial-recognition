"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Suspense } from "react";
import { forgot_sc } from "@/lib/schema";
import IconBox from "../resuable/Icon-box";
import { EmailIcon, QuestionIcon_cc } from "@/components/icon";
import SubTitle from "../shared/title/title";
import Form from "../resuable/from";
import { FromInput } from "../resuable/form-input";
import SpinnerCa from "../resuable/Spinner_ca";
import Link from "next/link";

function ForgotPassword() {
  const router = useRouter();
  const from = useForm({
    resolver: zodResolver(forgot_sc),
    defaultValues: {
      email: "",
    },
  });

  // const [forgotPasswordApi, { isLoading }] = useForgotPasswordApiMutation();

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values)
    // const formData = new FormData();
    // formData.append("email", values?.email);
    // try {
    //   const res = await forgotPasswordApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     router.push(`/auth/verify-otp?text=forgot&email=${values?.email}`);
    //   } else {
    //     toast.error(res?.message);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }

    router.push("/auth/verify-otp")
  };

  return (
    <div className="h-screen flex justify-center items-center bg-secondary">
      <div className="w-11/12 lg:max-w-2xl bg-[#FFFFFF] rounded-figma-sm p-4 lg:p-10 my-30 mx-auto">
        <div className="pb-8">
          <SubTitle text="Forgot Password" svg={false} />
          <p className="text-center text-[#989898]">
            For reset your password you have to give correct email.
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
                Send code
                {/* {isLoading ? <SpinnerCa /> : "Send code"} */}
              </Button>

            {/* <div
              className="
              relative
              w-full
              mt-4
              rounded-lg
              bg-linear-to-r
              from-[#FEAC1A]
              to-[#F84426]
              p-px"
            >
              <Button
                type="button"
                className="
                w-full
                h-11
                rounded-lg
                bg-white
                text-[#989898]
                border-0
                flex items-center justify-center
                transition-all duration-200
                hover:bg-white"
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Back to Log in
              </Button>
            </div> */}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default function ForgotPasswordSuspense() {
  return (
    <Suspense fallback={<SpinnerCa />}>
      <ForgotPassword />
    </Suspense>
  );
}
