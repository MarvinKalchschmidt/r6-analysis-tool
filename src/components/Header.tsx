"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Logo from "../../public/logo.svg";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { id: "", title: "home" },
  { id: "tournaments", title: "tournaments" },
];

export default function Header() {
  const router = useRouter();

  const handleClick = (redirectPath: string) => {
    router.push(redirectPath);
  };

  return (
    <header
      className={`flex items-center justify-between px-4 lg:px-16 2xl:px-32 gap-16 2xl:gap-48"
      }`}
    >
      <Link href="/" className="flex items-center justify-between gap-4">
        <Image src={Logo} width={42} alt="Logo" />
        <h1>ANALYSIS TOOL</h1>
      </Link>

      <nav className="relative hidden grow lg:flex items-center justify-between gap-16 fill">
        <ul className="flex justify-between items-center list-none gap-3 uppercase">
          {NAV_LINKS.map((nav) => (
            <li key={nav.id}>
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
