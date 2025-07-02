import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-10">
      <ul className="text-lg text-title space-y-3">
        <li>
          <Link href="#about" className="hover:text-accent">
            About
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-accent">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-accent">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-accent">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-accent">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
