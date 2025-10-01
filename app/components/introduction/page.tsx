import Header from "@/app/components/Header/Header";

export default function Introduction() {
  return (
    <div className="lg:p-0 lg:fixed lg:w-[35%] xl:w-[30%] 2xl:w-[25%] ">
      <div>
        <h1 className="text-3xl sm:text-5xl lg:text-[40px] xl:text-5xl font-extrabold">Tanjimul Sabbir</h1>
        <h3 className="text-base lg:text-xl mt-3">Front End Software Engineer</h3>
        <p className="mt-3 description">
          I’m a Front-End Engineer who enjoys building beautiful,
          <br />
          accessible,
          performant web apps.
        </p>
      </div>
      <Header />
    </div>
  );
}
