"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between bg-(--tertiary) px-4 lg:px-16 gap-24 2xl:gap-48"
      }`}
    >
      <Link href="/" className="flex items-center justify-between gap-4">
        <Image src={Logo} width={42} alt="Logo" />
        <h1 className="text-4xl font-(family-name:--font-goldman)">
          ANALYTICS
        </h1>
      </Link>

      <nav
        className="hidden lg:flex justify-between items-center h-full grow"
        aria-label="Main Navigation"
      >
        <ul className="flex h-full text-xl font-bold list-none uppercase">
          {NAV_LINKS.map((nav) => (
            <li key={nav.id}>
              <Link
                href={`/${nav.id}`}
                className={`flex items-center h-full px-8 hover:bg-(--secondary) hover:border-b-3 hover:border-(--orange) ${
                  pathname === `/${nav.id}`
                    ? "bg-(--secondary) border-b-3 border-blue-500"
                    : ""
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
