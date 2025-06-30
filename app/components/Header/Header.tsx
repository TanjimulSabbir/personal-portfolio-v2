export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background p-4">
      <nav className="max-w-5xl mx-auto flex justify-between">
        <h1 className="text-accent font-bold text-xl">YourName</h1>
        <ul className="flex gap-6 text-sm text-textSecondary">
          <li>
            <a href="#about" className="hover:text-accent">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-accent">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent">
              Projects
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
