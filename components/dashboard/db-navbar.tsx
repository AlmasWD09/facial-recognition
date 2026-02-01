"use client";


import { getPageInfo } from "@/lib/sidebar-data";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";


interface DashboardNavbarProps {
  onMenuClick: () => void;
}

export default function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  const pathname = usePathname();
  
  // Get dynamic title and subtitle based on current route
  const { title, subtitle } = getPageInfo(pathname);

  return (
    <div className="sticky bg-[#F5F5F5] h-20 top-0 z-10 flex   items-center justify-between  px-4 lg:px-6">
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
          <h1 className="hidden md:block text-base sm:text-lg font-semibold  truncate">
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
      <p>DB Notification</p>
      </div>
    </div>
  );
}
