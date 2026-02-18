"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FavIcon from "@/app/favicon/favicon";


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: "", icon_i: "", href: "/" },
    { name: "How it works", icon: "", icon_i: "", href: "/how-it-works" },
    { name: "Pricing", icon: "", icon_i: "", href: "/pricing" },
    { name: "About Us", icon: "", icon_i: "", href: "/about-us" },
    { name: "FAQ", icon: "", icon_i: "", href: "/faq" },
  ];

  return (
    <nav className="bg-[rgba(163,163,163,0.10)] backdrop-blur-[20px] container mx-auto  sticky top-0 z-50 rounded-xl">
      <div className="rounded-xl px-4">
        <div className="flex justify-between items-center h-17.5 py-3">
          {/* Logo **/}
          <Link href={"/"}>
            <Image
              src="/logo1.png"
              alt="photo"
              width={100}
              height={100}
              className=" object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 transition 
                    flex items-center gap-2 rounded-figma-md
                    ${
                      isActive
                        ? " text-[#989898] font-medium"
                        : " text-[#535353]"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/auth">
              <button className="bg-white font-bold shadow-[0_4px_12px_rgba(255,188,66,0.5),0_-4px_8px_rgba(255,188,66,0.3)] rounded-lg px-4 py-2 cursor-pointer">
                <span className="TextGradientTwo">Log in</span>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 cursor-pointer rounded-lg transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slideDown pt-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 text-black rounded-figma-md! text-sm transition 
                    ${isActive ? 'text-[#989898] font-medium' : 'text-[#535353]' }`}
                >
                  <FavIcon name={isActive ? item.icon_i : (item.icon as any)} />
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Profile */}
            <div className="py-3 border-t border-primary-foreground/20 mt-2">
              <div className="flex items-center gap-3">
                <div className="lg:hidden flex items-center space-x-3">
                  <Link href="/auth" onClick={() => setIsOpen(false)}>
                     <button className="bg-white font-bold shadow-[0_4px_12px_rgba(255,188,66,0.5),0_-4px_8px_rgba(255,188,66,0.3)] rounded-lg px-4 py-2 cursor-pointer">
                <span className="TextGradientTwo">Log in</span>
              </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
