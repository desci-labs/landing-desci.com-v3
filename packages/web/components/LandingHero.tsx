import Navigation from "./Navigation";

interface Props {
  title: string;
  slogan: string;
}

export default function LandingHero({ title, slogan }: Props) {
  return (
    <section
      style={{
        backgroundColor: "#161616",
        backgroundImage: "url(/constellation-min.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-dark-11">
        <Navigation />
        <div className="h-full">
          <div className="mx-auto w-full max-w-7xl flex flex-col justify-center h-full px-8 py-24 lg:pt-48 lg:pb-48">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-light-12 mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight lg:max-w-2xl">
                {title}
              </p>
              <p className="text-light-12 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
                {slogan}
              </p>
            </div>
            <div className="mx-auto flex gap-3 md:gap-6 grid grid-cols-1 md:grid-cols-3 w-full md:max-w-3xl mt-10">
              <a href="/researchers" className="button-primary">
                For Researchers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </a>
              <a href="/journals" className="button-secondary">
                For Journals
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7v10" />
                  <path d="M11 7v10" />
                  <path d="m15 7 2 10" />
                </svg>
              </a>
              <a href="/institutions" className="button-secondary">
                For Institutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="22" y2="22" />
                  <line x1="6" x2="6" y1="18" y2="11" />
                  <line x1="10" x2="10" y1="18" y2="11" />
                  <line x1="14" x2="14" y1="18" y2="11" />
                  <line x1="18" x2="18" y1="18" y2="11" />
                  <polygon points="12 2 20 7 4 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
