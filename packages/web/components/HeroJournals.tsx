import Navigation from "./Navigation";

interface Props {
  title: string;
  slogan: string;
}

export default function HeroJournals({ title, slogan }: Props) {
  return (
    <section
      style={{
        backgroundColor: "#161616",
        backgroundImage: "url(/journals-hero-min.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation activePage="journals" />
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 px-8 py-24">
        <div className="max-w-xl text-center md:text-left md:ml-auto md:pl-40 md:pb-24">
          <div className="w-full">
            <p className="dark12 mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight">
              {title}
            </p>
            <p className="dark12 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
              {slogan}
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-3 mt-10 flex-col sm:flex-row">
            <a
              className="button-primary launch-button"
              href="https://airtable.com/appgLeZk1veURa9gS/pagAGXjuFmxrpqCZL/form"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nodes-c.png" alt="" className="w-7" />
              Create Community
            </a>
            <a
              className="button-secondary"
              href="https://nodes.desci.com"
              target="_blank"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            style={{ borderColor: "var(--gray-dark-a6)", borderWidth: "1px" }}
            className="relative w-full lg:rounded-2xl object-cover rounded shadow-2xl"
            src="/ARC.png"
          />
        </div>
      </div>
    </section>
  );
}
