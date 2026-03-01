"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import Link from "next/link";
import { register } from "@/src/lib/schema";

import SubTitle from "../shared/title/title";
import Form from "../resuable/from";
import { FromInput } from "../resuable/form-input";
import { EmailIcon, LockIcon, UserIcon } from "@/src/components/icon";
import { useRegisterApiMutation } from "@/src/redux/authontication/authApi";

export default function Register() {
  const router = useRouter();
  const from = useForm({
    resolver: zodResolver(register),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "user",
    },
  });

  const [registerApi, { isLoading }] = useRegisterApiMutation();
  // const [socialLogin] = useSocialLoginMutation();

  const handleSubmit = async (values: FieldValues) => {
    // const formData = new FormData();
    // formData.append("name", values?.name);
    // formData.append("email", values?.email);
    // formData.append("password", values?.password);
    // formData.append("password_confirmation", values?.password_confirmation);
    // formData.append("role", "user");
    // try {
    //   const res = await registerApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     router.push(`/auth/email-verify?text=register&email=${values?.email}`);
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  const handleGoogleLogin = async () => {
    // const provider = new GoogleAuthProvider();
    // try {
    //   const result = await signInWithPopup(auth, provider);
    //   const user = result.user as CustomUser;
    //   const googleToken = await user.getIdToken();
    //   // console.log('result-------> ',result)
    //   // Prepare the data
    //   const formData = new FormData();
    //   formData.append("id_token", googleToken);
    //   // formData.append("type", "google");
    //   const response = await socialLogin(formData).unwrap();
    //   const token = response?.data?.token;
    //   if (response?.status === true) {
    //     toast.success(response?.message);
    //     if (token) {
    //       Cookies.set("token", token);
    //     }
    //     if (pathUrl) {
    //       router.push(pathUrl);
    //     } else router.push(`/`);
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
          <SubTitle text="Sign up" svg={false} />
          <p className="text-center text-[#989898]">
            Give correct information for access your account.
          </p>
        </div>
        <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
          <FromInput
            className="h-11"
            name="name"
            placeholder="Write your full name..."
            icon={<UserIcon />}
            label="Full name"
          />
          <FromInput
            className="h-11"
            name="email"
            placeholder="Write your email address..."
            icon={<EmailIcon />}
            label="Email"
          />

          <FromInput
            className="h-11"
            name="password"
            placeholder="Password"
            eye={true}
            icon={<LockIcon />}
            label="Password"
          />
          <FromInput
            className="h-11"
            name="password_confirmation"
            placeholder="Confirm password"
            eye={true}
            icon={<LockIcon />}
            label="Confirm Password"
          />

          <div>
            <Button
              type="submit"
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
              Sign up
              {/* {isLoading ? <SpinnerCa /> : "Sign up"} */}
            </Button>
          </div>
        </Form>

        <div className="space-y-4 mt-10">
          <div className="text-center  text-figma-secondary">
            Have an account? 
            <Link
               href="/auth"
              className="inline-flex items-center TextGradient pl-2 font-semibold"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
