"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Logo from "../../public/logo.svg";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { id: "", title: "home" },
  { id: "matches", title: "matches" },
  { id: "teams", title: "teams" },
  { id: "tournaments", title: "tournaments" },
];

export default function Header() {
  const router = useRouter();

  const handleClick = (redirectPath: string) => {
    router.push(redirectPath);
  };

  return (
    <header
      className={`flex items-center justify-between bg-(--tertiary) px-4 lg:px-16 gap-24 2xl:gap-48 "
      }`}
    >
      <Link href="/" className="flex items-center justify-between gap-4">
        <Image src={Logo} width={42} alt="Logo" />
        <h1 className="text-4xl font-(family-name:--font-goldman)">
          ANALYTICS
        </h1>
      </Link>

      <nav className="hidden grow lg:flex justify-between items-center h-full">
        <ul className="flex justify-between items-center h-full text-xl font-bold list-none uppercase">
          {NAV_LINKS.map((nav) => (
            <li
              key={nav.id}
              className="flex items-center h-full px-8 hover:bg-(--secondary)"
            >
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
