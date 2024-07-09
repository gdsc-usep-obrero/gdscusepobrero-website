"use client";
import {
  Collapse,
  IconButton,
  Navbar
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import gdscIcon from "public/images/gdsc-long.png";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-6 text-center flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Link href={"/"} className="text-black">Home</Link>
      <Link href={"/"} className="text-black">About</Link>
      <Link href={"/"} className="text-black">Events</Link>
      <Link href={"/"} className="text-black">Team</Link>
      <Link href={"/"} className="text-black">Contact us!</Link> */}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <Image src={gdscIcon} alt="GDSC Icon" height={32}/>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {/* <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          </IconButton> */}
        </div>
      </div>
      <Collapse open={openNav} className="">{navList}</Collapse>
    </Navbar>
  );
}
