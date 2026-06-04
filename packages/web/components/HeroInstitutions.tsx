import Navigation from "./Navigation";

interface Props {
  title: string;
  slogan: string;
}

export default function HeroInstitutions({ title, slogan }: Props) {
  return (
    <section
      style={{
        backgroundColor: "#161616",
        backgroundImage: "url(/storyboard-14-min.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="bg-dark-11">
        <Navigation activePage="institutions" />
        <div className="mx-auto w-full max-w-5xl pt-24 pb-40 px-24 lg:px-16">
          <div>
            <div className="flex-col max-w-4xl mr-auto">
              <p className="text-light-12 mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight">
                {title}
              </p>
              <p className="text-light-12 lg:text-xl max-w-sm mt-4 text-base">
                {slogan}
              </p>
            </div>
            <div className="gap-3 mt-10 flex-col sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
