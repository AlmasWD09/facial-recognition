"use client";


import { getPageInfo } from "@/src/lib/sidebar-data";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { DbNotification_cc } from "../icon";

interface DashboardNavbarProps {
  onMenuClick: () => void;
}

export default function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Get dynamic title and subtitle based on current route
  const { title, subtitle } = getPageInfo(pathname);

  const hanldeNotification = () => {
    router.push("/admin/notification");
  };

  return (
    <div className="sticky bg-[rgba(250,250,250,1)] h-20 top-0 z-10 flex   items-center justify-between  px-4 lg:px-6">
      {/* Left side - Menu button + Search */}
      <div className="flex flex-1 items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
        >
          <Menu className="h-5 w-5" />
        </button>
        {/* Page Title & Subtitle */}
        <div className="flex flex-col">
          <h1 className="hidden md:block text-2xl font-semibold  truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="hidden md:block text-xs text-gray-400 truncate max-w-md lg:max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right side - Notifications and Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        <span onClick={() => hanldeNotification()} className="cursor-pointer">
          <DbNotification_cc />
        </span>
      </div>
    </div>
  );
}
