"use client";

import { X } from "lucide-react";

interface SidebarLogoProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function SidebarLogo({
  onClose,
  showCloseButton = true,
}: SidebarLogoProps) {
  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="pt-4 w-full flex gap-2">
       <h1 className="text-red-600 font-bold">Image</h1>
        <div>
          <h2 className="font-semibold">Admin</h2>
          <p className="text-xs">admin24@gmail.com</p>
        </div>
      </div>

      {showCloseButton && (
        <button
          onClick={onClose}
          className="lg:hidden rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
