import { categorie_ac, categorie_ac_i, dashboard_ac, dashboard_i_ac, Setting_ic, } from "@/app/icon/dbIcon";




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
    inactiveIcon: dashboard_i_ac, // Inactive icon
    title: "Dashboard management",
  },
  {
    name: "Category Management",
    href: "/admin/category-management",
    icon: categorie_ac, // Active icon
    inactiveIcon: categorie_ac_i, // Inactive icon
    title: "Category Management",
    subtitle: "Manage and monitor all categories.",
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Setting_ic,
    title: "Settings",
    subtitle: "Configure your application settings.",
    children: [
      {
        name: "Change Password",
        href: "/admin/settings/change-password",
        icon: categorie_ac, // Active icon
        inactiveIcon: categorie_ac_i, // Inactive icon
        title: "Change Password",
        subtitle: "Update your account password for security.",
      },
      {
        name: "Privacy Policy",
        href: "/admin/settings/privacy-policy",
        icon: dashboard_ac, // Active icon
        inactiveIcon: dashboard_i_ac, // Inactive icon
        title: "Privacy Policy",
        subtitle: "Review our privacy policy and data protection terms.",
      },

    ],
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
    title: item?.title || "Page",
    subtitle: item?.subtitle,
  };
};