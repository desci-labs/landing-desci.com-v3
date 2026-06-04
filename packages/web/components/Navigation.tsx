"use client";

import React from "react";

interface NavigationProps {
  activePage?: "researchers" | "journals" | "institutions";
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export default function Navigation({ activePage }: NavigationProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <section
      style={{
        background:
          "linear-gradient(to top, transparent, rgba(22, 22, 22, 0.2))",
      }}
    >
      <div className="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
        <div className="relative flex flex-col w-full py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              href="/"
              className="lg:pr-8 text-black inline-flex items-center gap-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand-wordmark-light.svg"
                alt="DeSci Labs"
                width={193}
                height={60}
              />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center p-2 dark12 md:hidden"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={open ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav
            className={cx(
              "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row gap-6",
              open ? "flex" : "hidden",
            )}
          >
            <a
              className={cx("nav-link", activePage === "researchers" && "active")}
              href="/researchers"
            >
              Researchers
            </a>
            <a
              className={cx("nav-link", activePage === "journals" && "active")}
              href="/journals"
            >
              Journals
            </a>
            <a
              className={cx(
                "nav-link",
                activePage === "institutions" && "active",
              )}
              href="/institutions"
            >
              Institutions
            </a>
            <a
              className="nav-link"
              href="https://mirror.xyz/0x53D3008Cf7b326a7E9cbbDFB289fcCe9345266d9"
            >
              Blog
            </a>
            <a className="nav-link" href="https://codex.desci.com" target="_blank">
              Codex
            </a>
            <a className="nav-link" href="https://docs.desci.com" target="_blank">
              User Docs
            </a>
            <a
              className="button-primary"
              href="https://nodes.desci.com"
              target="_blank"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
