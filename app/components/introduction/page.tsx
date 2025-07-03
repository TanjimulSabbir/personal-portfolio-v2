import Header from "@/app/components/Header/Header";

export default function Introduction() {
  return (
    <div className="p-4 lg:p-0 lg:fixed lg:w-[25%]">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold">Tanjimul Sabbir</h1>
        <h3 className="text-base lg:text-xl mt-3">Front End Software Engineer</h3>
        <p className="mt-3 description">
          I’m a Front-End Engineer who enjoys building beautiful, accessible,
          performant web apps.
        </p>
      </div>
      <Header />
    </div>
  );
}
