"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

interface childrenProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({ children }: childrenProps) {
  const pathname = usePathname();
  const isPaymentSuccessPage = pathname === "/" || "/event-management";
  // const isPaymentSuccessPage = pathname === "/payment-success";

  return (
    <>
      <div className="min-h-screen flex flex-col">
       {!isPaymentSuccessPage && <Navbar />} 
        <main className="flex-1">{children}</main>
       {!isPaymentSuccessPage && <Footer /> }
      </div>
    </>
  );
}
