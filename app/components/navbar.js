"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <nav className="border-b-2 border-purple-900 sticky top-0 bg-purple-800 text-gray-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">
            <p className="hidden sm:flex">Web Impact</p>
            <Image
              className="flex sm:hidden"
              src={Logo}
              alt="Web Impact Logo"
              width={48}
              height={48}
            />
          </Link>
          <ul className="flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/photos">Photos</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/team">Team</Link>
            </li>
            <li className="md:hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
