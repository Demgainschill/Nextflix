"use client";
import styles from "@/app/ui/styles.module.css";
import { FileArchiveIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "lucide-react";
import logo from "../../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recent" },
  { name: "My List", href: "/home/watch/list" },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-between px-20">
      <div>
        <Link href="/home">
          <Image src={logo} alt={"img"} width={250} />
        </Link>
      </div>
      <div className="flex space-x-10 justify-center w-full text-3xl relative top-20">
        {links.map((link, idx) => (
          <div key={idx} className="">
            {pathName === link.href ? (
              <div>
                <Link href={link.href} className="text-red-600 font-semibold ">
                  {link.name}
                </Link>
              </div>
            ) : (
              <div>
                <Link href={link.href} className="font-semibold ">
                  {link.name}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
