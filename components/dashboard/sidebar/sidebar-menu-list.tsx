"use client";

import { usePathname } from "next/navigation";
import { MenuItem } from "@/lib/sidebar-data";
import SidebarMenuItem from "./sidebar-menu-items";

interface SidebarMenuListProps {
  items: MenuItem[];
  onItemClick?: () => void;
  level?: number;
}

export default function SidebarMenuList({
  items,
  onItemClick,
  level = 0,
}: SidebarMenuListProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {items.map((item) => (
        <div key={item.href}>
          <SidebarMenuItem
            item={item}
            isActive={pathname === item.href}
            onClick={onItemClick}
            level={level}
          />
        </div>
      ))}
    </div>
  );
}