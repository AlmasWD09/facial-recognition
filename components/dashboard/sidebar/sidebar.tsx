"use client";

import { usePathname, useRouter } from "next/navigation";

import { LogOut } from "lucide-react";
import { SidebarItems } from "@/lib/sidebar-data";
import { Button } from "@/components/ui/button";
import SidebarLogo from "./sidebar-logo";
import SidebarMenuList from "./sidebar-menu-list";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
const router = useRouter()

const handleLogout = () =>{
router.push('/dashboard/login')
}

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40  lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-68 flex-col bg-[rgba(250,250,250,1)] border-r border-[#F5F5F5] transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <SidebarLogo onClose={onClose} />
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {/* Main Menu */}
          <SidebarMenuList items={SidebarItems} onItemClick={onClose} />
        </nav>

        {/* LOG OUT BUTTON */}
        <div className="w-full px-4 pb-4">
          <Button
          onClick={()=> handleLogout()}
          className="w-full flex justify-between h-11 font-semibold cursor-pointer"
           style={{ background: 'linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)' }}
          >
            Log Out <LogOut />
          </Button>
        </div>
      </div>
    </>
  );
}
