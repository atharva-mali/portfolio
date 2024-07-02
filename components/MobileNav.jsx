"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (path) => () => {
    setIsOpen(false);
    // Use a short delay to ensure the link navigation is not interrupted
    setTimeout(() => {
      document.location.href = path;
    }, 100);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick("/")}>
            <h1>
              Atharva<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
