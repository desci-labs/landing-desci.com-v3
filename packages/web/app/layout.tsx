import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.desci.com"),
  title: {
    default: "DeSci Labs",
    template: "%s | DeSci Labs",
  },
  description:
    "DeSci enables researchers and academic organizations to securely share and collaborate using decentralized science technology.",
  authors: [{ name: "DeSci Labs" }],
  keywords: [
    "decentralized science",
    "open science",
    "science collaboration",
    "research collaboration",
    "open access science",
    "persistent identifiers",
    "science infrastructure",
    "open data",
    "open code",
    "verified science",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.desci.com",
    siteName: "DeSci Labs",
    title: "DeSci Labs",
    description: "Building the future of science",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Social open graph",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DeSciLabs",
    creator: "@DeSciLabs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-dark-10 selection:text-light-12"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="gray-1">
        {children}
        {/* Ionicons web component used by the overview/feature sections. */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
