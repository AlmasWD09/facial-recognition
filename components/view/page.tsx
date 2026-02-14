"use client";

import { Suspense } from "react";
import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "../resuable/from";
import SubTitle from "../shared/title/title";
import { FromInput } from "../resuable/form-input";
import { LockIcon } from "@/app/icon";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { new_Pass } from "@/lib/schema";

function ResetPasswordContent() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  // const [resetPasswordApi, { isLoading }] = useResetPasswordApiMutation();
  const router = useRouter();
  const params = useSearchParams();
  const email = params?.get("email");

  const from = useForm({
    resolver: zodResolver(new_Pass),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {};

  return (
    <div className="h-screen flex justify-center items-center bg-secondary">
      <div className="w-11/12 lg:max-w-2xl bg-[#FFFFFF] rounded-figma-sm p-4 lg:p-10 my-30 mx-auto">
        <div className="pb-8">
          <SubTitle text="Create new password" svg={false} />
          <p className="text-center text-[#989898]">
            You have to create a new password after reset.
          </p>
        </div>
        <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
          <div>
            <FromInput
              className="h-11"
              name="password"
              placeholder="Password"
              eye={true}
              icon={<LockIcon />}
              label="Password"
            />
          </div>

          <div>
            <FromInput
              className="h-11"
              name="password_confirmation"
              placeholder="Password"
              eye={true}
              icon={<LockIcon />}
              label="Confirm Password"
            />
          </div>

          <div>
            <Link href={'/auth'}>
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
              Update Passoword
              {/* {isLoading ? <SpinnerCa /> : "Login"} */}
            </Button>
            </Link>
          </div>
        </Form>
      </div>
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
