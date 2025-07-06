"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("projects");

  const navItems = [
    { name: "About", href: "#aboutme" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hidden lg:block mt-10">
      <ul className="space-y-4">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = active === sectionId;

          return (
            <li
              key={item.name}
              className="group flex items-center space-x-4 cursor-pointer font-Exo2"
              onClick={() => setActive(sectionId)} // 🔥 Manually set active on click
            >
              <span
                className={`h-[1px] transition-all duration-300 ${
                  isActive
                    ? "bg-white w-14"
                    : "bg-gray-600 group-hover:bg-white w-6 group-hover:w-14"
                }`}
              ></span>
              <Link
                href={item.href}
                className={`uppercase text-sm tracking-wide font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
