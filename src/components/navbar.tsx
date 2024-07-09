"use client";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import gdscIcon from "public/images/gdsc-long.png";
import { usePathname } from "next/navigation";

export function StickyNavbar({}) {
  const [openNav, setOpenNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path: string) => {
    return pathname.split("/")[1] === path.split("/")[1];
  };

  const navList = (
    <ul className="mt-6 text-center flex flex-col gap-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Link
        href="/"
        className={`text-black ${isActive("/") ? "text-maroon" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`text-black ${isActive("/about") ? "text-maroon" : ""}`}
      >
        About
      </Link>
      <Link
        href="/events"
        className={`text-black ${isActive("/events") ? "text-maroon" : ""}`}
      >
        Events
      </Link>
      {/* <Link href="/team">
        <a className={`text-black ${isActive("/team") ? "text-maroon" : ""}`}>Team</a>
      </Link>
      <Link href="/contact">
        <a className={`text-black ${isActive("/contact") ? "text-maroon" : ""}`}>Contact us!</a>
      </Link> */}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 lg:px-8 lg:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <Image src={gdscIcon} alt="GDSC Icon" height={32} />
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}
