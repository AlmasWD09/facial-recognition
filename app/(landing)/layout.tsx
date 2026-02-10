"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

interface childrenProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({ children }: childrenProps) {
  const pathname = usePathname();
  const isPaymentSuccessPage = pathname === "/";
  // const isPaymentSuccessPage = pathname === "/payment-success";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
