import Header from "@/app/components/Header/Header";

export default function Introduction() {
  return (
    <div className="fixed w-[25%]">
      <div>
        <h1 className="text-5xl font-extrabold">Tanjimul Sabbir</h1>
        <h3 className="text-xl mt-3">Front-End Software Engineer</h3>
        <p className="mt-5 description">
          I’m a Front-End Engineer who enjoys building beautiful, accessible,
          performant web apps.
        </p>
      </div>
      <Header />
    </div>
  );
}
