import Header from "@/app/components/Header/Header";

export default function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <div>
        <h1 className="text-5xl">Tanjimul Sabbir</h1>
        <h3 className="text-xl">Front-End Software Engineer</h3>
        <p>
          I’m a Front-End Engineer who enjoys building beautiful, accessible,
          performant web apps.
        </p>
      </div>
      <Header />
    </div>
  );
}
