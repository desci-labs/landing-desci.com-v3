"use client";

import React from "react";

export interface FeatureTab {
  label: string;
  header: string;
  content: string;
  /** Video filename in /public (spaces allowed). */
  video: string;
  /** Fallback image filename for small screens. */
  phone: string;
}

interface Props {
  header: string;
  tabs: FeatureTab[];
  showAppButtons?: boolean;
}

const asset = (name: string) => `/${encodeURIComponent(name)}`;

export default function FeatureTabs({ header, tabs, showAppButtons }: Props) {
  const [active, setActive] = React.useState(0);

  return (
    <section style={{ backgroundColor: "#161616" }} id="features">
      <div className="mx-auto w-full lg:px-24 md:px-12 items-center px-8 py-24 scroll-mt-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="dark12 font-extrabold lg:text-5xl text-4xl tracking-tighter">
              {header}
            </p>
          </div>

          {/* Desktop: tabbed video player */}
          <div className="hidden sm:block pt-24">
            <div className="mx-auto max-w-7xl w-full">
              <div className="tab-buttons rounded-xl">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActive(i)}
                    className={`tab-button rounded-xl dark11 ${
                      active === i ? "active" : ""
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="tab-content">
              <div className="relative w-full mx-auto items-center py-12 pb-12">
                <div className="mx-auto pb-12">
                  <div className="mx-auto w-full max-w-7xl gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 lg:h-48">
                    <div>
                      <div className="gap-3 lg:inline-flex lg:h-10">
                        <p className="dark12 mt-4 text-lg font-semibold leading-6 font-display lg:mt-0">
                          {tabs[active].header}
                        </p>
                      </div>
                      <p className="dark11 text-sm mt-4">{tabs[active].content}</p>
                    </div>
                    <div />
                  </div>
                </div>
                <div className="max-w-screen-2xl mx-auto">
                  <video
                    key={tabs[active].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      borderColor: "var(--gray-dark-a6)",
                      borderWidth: "1px",
                    }}
                    className="relative w-full lg:rounded-xl object-cover rounded shadow-2xl"
                  >
                    <source src={asset(tabs[active].video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: stacked images */}
          <div className="block sm:hidden">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12"
              >
                <div className="mx-auto pb-12">
                  <div className="mx-auto w-full gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-2">
                    <div>
                      <div className="gap-3 lg:inline-flex lg:h-10">
                        <p className="dark12 text-xl font-semibold leading-6 font-display lg:mt-0">
                          {tab.header}
                        </p>
                      </div>
                      <p className="dark11 text-sm mt-4">{tab.content}</p>
                    </div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="relative w-full object-cover rounded-xl shadow-2xl border border-light-3"
                  src={asset(tab.phone)}
                />
              </div>
            ))}
          </div>

          {showAppButtons ? (
            <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">
              <a
                className="button-primary launch-button"
                href="https://nodes.desci.com"
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/nodes-c.png" alt="" className="w-7" />
                View App
              </a>
              <a
                className="button-secondary"
                href="https://codex.desci.com"
                target="_blank"
              >
                Learn More
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
