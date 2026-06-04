import Navigation from "./Navigation";

interface Props {
  title: string;
  slogan: string;
}

export default function HeroResearchers({ title, slogan }: Props) {
  return (
    <section
      style={{
        backgroundColor: "#161616",
        backgroundImage: "url(/mars-2-min.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation activePage="researchers" />
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nodes-c.png"
                alt=""
                className="w-28"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <p className="dark12 mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight">
              {title}
            </p>
            <p className="dark12 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
              {slogan}
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">
            <a
              className="button-primary launch-button"
              href="https://nodes.desci.com"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nodes-c.png" alt="" className="w-7" />
              Launch
            </a>
          </div>
        </div>
        <div className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12 md:pb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            style={{ borderColor: "var(--gray-dark-a6)", borderWidth: "1px" }}
            className="relative w-full lg:rounded-2xl object-cover rounded shadow-2xl"
            src="/Node Home 2.png"
          />
        </div>
      </div>
    </section>
  );
}
