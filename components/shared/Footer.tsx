import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import photo1 from "@/public/footer.png";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${photo1.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" py-8 md:py-12 mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo1.png"
                alt="photo"
                width={100}
                height={100}
                className=" w-[35%] object-cover"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-2">
              <span className="flex items-center space-x-3 text-gray-700  group">
                <Mail className="w-4 h-4 shrink-0  transition-transform" />
                <span className="text-sm break-all">malike25@gmail.com</span>
              </span>

              <span className="flex items-center space-x-3 text-gray-700  group">
                <Phone className="w-4 h-4 shrink-0  transition-transform" />
                <span className="text-sm">+880 1548 658987</span>
              </span>

              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                <span className="text-sm">Gulshan, Dhaka 1212, BD</span>
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Programs
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-600">
                Home
              </Link>
              <Link href="/pricing" className="text-sm text-gray-600">
                Pricing
              </Link>
              <Link href="/about-us" className="text-sm text-gray-600">
                About Us
              </Link>
              <Link href="/faq" className="text-sm text-gray-600">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Help & Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Help & Support
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/terms" className="text-sm text-gray-600">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Social Media
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_48_462)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_462">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                aria-label="Google"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_48_464)">
                    <path
                      d="M23.7663 12.2763C23.7663 11.4605 23.7001 10.6404 23.559 9.83789H12.2402V14.4589H18.722C18.453 15.9492 17.5888 17.2676 16.3233 18.1054V21.1037H20.1903C22.4611 19.0137 23.7663 15.9272 23.7663 12.2763Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50277 14.3002C5.00011 12.8099 5.00011 11.196 5.50277 9.70569V6.61475H1.51674C-0.185266 10.0055 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3002Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_464">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
