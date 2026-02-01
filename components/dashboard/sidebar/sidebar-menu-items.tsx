"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MenuItem } from "@/lib/sidebar-data";

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick?: () => void;
  level?: number;
}

export default function SidebarMenuItem({
  item,
  isActive,
  onClick,
  level = 0,
}: SidebarMenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;

  // Check if any child is active
  const isAnyChildActive = hasChildren && item.children?.some(
    child => pathname === child.href
  );

  // Auto-expand if any child is active (remove isActive from here)
  useEffect(() => {
    if (isAnyChildActive) {
      setIsExpanded(true);
    }
  }, [isAnyChildActive]);


  const shouldShowActive = level > 0 ? isActive : isActive;
  const Icon = level > 0
    ? (isActive ? item.icon : (item.inactiveIcon || item.icon))
    : (isActive ? item.icon : (item.inactiveIcon || item.icon));

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    } else {
      onClick?.();
    }
  };

  return (
    <div>
      <Link
        href={hasChildren ? "#" : item.href}
        onClick={handleClick}
        className={`flex items-center gap-3 rounded mx-4 px-3 py-2.5 text-sm font-medium transition-colors ${shouldShowActive
            ? "bg-white text-primary font-semibold"
            : "text-[#888888] hover:bg-gray-50"
          } ${level > 0 ? 'ml-2' : ''}`}
        style={{ marginLeft: level > 0 ? `${level * 1}rem` : '' }}
      >
        <Icon className="h-5 w-5 shrink-0" />
        <span className="flex-1 truncate">{item.name}</span>

        {hasChildren && (
          <span className="ml-auto">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}

        {item.badge && (
          <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
            {item.badge}
          </span>
        )}
      </Link>

      {/* Render children if expanded */}
      {hasChildren && isExpanded && (
        <div className="ml-6 mt-1 space-y-1 pl-2">
          {item.children?.map((child) => {
            const isChildActive = pathname === child.href;

            return (
              <SidebarMenuItem
                key={child.href}
                item={child}
                isActive={isChildActive}
                onClick={onClick}
                level={level + 1}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}