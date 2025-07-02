"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("projects"); // set default active section

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="mt-10">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name.toLowerCase())}
            className="group flex items-center space-x-4 cursor-pointer"
          >
            <span
              className={`h-[1px] w-6 transition-all duration-300 ${
                active === item.name.toLowerCase()
                  ? "bg-white"
                  : "bg-gray-600 group-hover:bg-white"
              }`}
            ></span>
            <Link
              href={item.href}
              className={`uppercase text-sm tracking-wide font-semibold transition-colors duration-300 ${
                active === item.name.toLowerCase()
                  ? "text-white"
                  : "text-gray-500 group-hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
