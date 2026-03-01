"use client";

import Link from "next/link";
import { MenuItem } from "@/src/lib/sidebar-data";

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick?: () => void;
}

export default function SidebarMenuItem({
  item,
  isActive,
  onClick,
}: SidebarMenuItemProps) {
  // Choose the correct icon based on active state
  const Icon = isActive ? item.icon : item.inactiveIcon || item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      
      className={`flex items-center gap-3 rounded mx-4 px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-white text-primary font-bold! shadow-[0_4px_12px_rgba(255,208,125,0.25),0_-4px_8px_rgba(255,208,125,0.15)] TextGradientTwo"
          : "text-[#888888] hover:bg-gray-50 "
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="flex-1 truncate">{item.name}</span>
      {item.badge && (
        <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
          {item.badge}
        </span>
      )}
    </Link>
  );
}
