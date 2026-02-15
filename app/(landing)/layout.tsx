"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

interface childrenProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({ children }: childrenProps) {
  const pathname = usePathname();
  const isNavbarHidden = pathname === "/" || "/event-management";
  const isFooterHidden = pathname === "/event-management" || "/create-event" || "/edit-event" || "/event-share";

  return (
    <>
      <div className="min-h-screen flex flex-col">
       {!isNavbarHidden && <Navbar />} 
        <main className="flex-1">{children}</main>
       {!isFooterHidden && <Footer /> }
      </div>
    </>
  );
}
