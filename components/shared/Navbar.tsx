"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import IconBox from "../resuable/Icon-box";
import FavIcon from "@/app/favicon/favicon";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: "", icon_i: "", href: "/" },
    { name: "How it works", icon: "", icon_i: "", href: "/" },
    { name: "Pricing", icon: "", icon_i: "", href: "/" },
    { name: "About Us", icon: "", icon_i: "", href: "/" },
    { name: "FAQ", icon: "", icon_i: "", href: "/" },
  ];

  return (
    <nav className="bg-secondary sticky top-0 z-50 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[70px] py-3">
          {/* Logo **/}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-[100px] h-[70px] object-cover py-1"
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
                        ? "bg-white text-primary font-bold"
                        : " text-[#535353]"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">
              <Link href="/notification">
                <IconBox className="rounded-full">
                  <FavIcon name="noti" />
                </IconBox>
              </Link>
              <Link href="/cart">
                <div className="relative">
                  <IconBox className="rounded-full">
                    <FavIcon name="shopping_cc" />
                  </IconBox>
                  <span className="absolute -top-1 -right-1 text-white bg-primary w-5 h-5 text-[10px] flex justify-center items-center rounded-full">
                    2
                  </span>
                </div>
              </Link>
{/* 
              <Link href="/account">
                <div className="flex items-center gap-3">
                  <Avatars
                    src={assets.LoginUserPhoto}
                    fallback=""
                    alt="profile"
                    className="rounded-full"
                    fallbackStyle=""
                  />
                  <div className=" text-black leading-5 mb-1">
                    <p className="font-semibold">Elizabeth Olson</p>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </Link> */}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/auth">
                <Button className="rounded-figma-md! border border-gray-200 bg-transparent text-black font-semibold">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="rounded-figma-md!">Create an account</Button>
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
                    ${isActive && "bg-white text-primary font-bold"}`}
                >
                  <FavIcon name={isActive ? item.icon_i : (item.icon as any)} />
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Profile */}
            <div className="py-3 border-t border-primary-foreground/20 mt-2">
              <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {/* <Link href="/account" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center gap-3">
                        <Avatars
                          src={assets.LoginUserPhoto}
                          fallback=""
                          alt="profile"
                          className="rounded-full"
                          fallbackStyle=""
                        />
                        <div className=" text-black leading-5 mb-1">
                          <p className="font-semibold">Elizabeth Olson</p>
                          <p>example@gmail.com</p>
                        </div>
                      </div>
                    </Link> */}

                    <div className="flex items-center gap-1">
                      <Link
                        href="/notification"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconBox className="rounded-full ">
                          <FavIcon name="noti" />
                        </IconBox>
                      </Link>
                      <Link href="/cart" onClick={() => setIsOpen(false)}>
                        <div className="relative ">
                          <IconBox className="rounded-full">
                            <FavIcon name="shopping_cc" />
                          </IconBox>
                          <span className="absolute -top-1 -right-1 text-white bg-primary w-5 h-5 text-[10px] flex justify-center items-center rounded-full">
                            2
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:hidden flex items-center space-x-3">
                    <Link href="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="rounded-figma-md! border border-gray-200 bg-transparent text-black font-semibold">
                        Login
                      </Button>
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="rounded-figma-md!">
                        Create an account
                      </Button>
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
