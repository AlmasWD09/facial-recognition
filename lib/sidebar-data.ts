import { dashboard_ac, dashboard_i_ac, eventManagement_ac, eventManagement_i_ac, settings_ac, settings_i_ac, subscription_ac, subscription_i_ac, userManagement_ac, userManagement_i_ac } from "@/app/icon/dbIcon";


export interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  inactiveIcon?: React.ComponentType<any>;
  badge?: string;
  children?: MenuItem[];
  title?: string;
  subtitle?: string;
}



// Main menu items
export const SidebarItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: dashboard_ac, // Active icon
    inactiveIcon: dashboard_i_ac , // Inactive icon
    title: "Dashboard management",
  },
  {
    name: "User Management",
    href: "/admin/user-management",
    icon: userManagement_ac, // Active icon
    inactiveIcon: userManagement_i_ac, // Inactive icon
    title: "User Management",
  },
  {
    name: "Event Management",
    href: "/admin/event-management",
    icon: eventManagement_ac, // Active icon
    inactiveIcon: eventManagement_i_ac, // Inactive icon
    title: "Event Management",
  },
  {
    name: "Payment & Monetization",
    href: "/admin/payment-monetization",
    icon: subscription_ac, // Active icon
    inactiveIcon: subscription_i_ac, // Inactive icon
    title: "Subscription Management",
  },



  {
    name: "Settings",
    href: "/admin/settings",
    icon: settings_ac, // Active icon
    inactiveIcon: settings_i_ac, // Inactive icon
    title: "Settings",
  },
];



// Helper function to get page info by pathname
export const getPageInfo = (pathname: string): { title: string; subtitle?: string } => {
  // Recursive function to search in nested items
  const findItem = (items: MenuItem[]): MenuItem | undefined => {
    for (const item of items) {
      if (item.href === pathname) {
        return item;
      }
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  const item = findItem(SidebarItems);

  return {
    title: item?.title || "Notification",
    subtitle: item?.subtitle,
  };
};