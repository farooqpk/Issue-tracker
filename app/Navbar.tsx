"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import cn from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const Links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={cn({
                "text-zinc-900": currentPath === link.href ? true : false,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
