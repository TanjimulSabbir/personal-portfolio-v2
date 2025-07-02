import Header from "@/app/components/Header/Header";

export default function Introduction() {
  return (
    <div className="w-[30%]">
      <div>
        <h1 className="text-5xl font-extrabold">Tanjimul Sabbir</h1>
        <h3 className="text-xl mt-3">Front-End Software Engineer</h3>
        <p className="mt-5">
          I’m a Front-End Engineer who enjoys building beautiful, accessible,
          performant web apps.
        </p>
      </div>
      <Header />
    </div>
  );
}
