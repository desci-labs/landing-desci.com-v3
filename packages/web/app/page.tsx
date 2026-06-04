import LandingHero from "@/components/LandingHero";
import Welcome from "@/components/Welcome";
import TargetGroups from "@/components/TargetGroups";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <LandingHero
        title="Let's build the future of science, together"
        slogan="New infrastructure for the next era of science"
      />
      <Welcome
        header="Opening up science to everyone"
        subheader="DeSci infrastructure is designed to be accessible to all and controlled by no one, an open protocol where anyone can participate, collaborate, and contribute toward moving science forward."
        items={[
          {
            header: "Publications, reimagined",
            content:
              "Replace static PDFs with rich, interoperable research ecosystems. Unite manuscripts, code and data with seamless simplicity, all in one place.",
          },
          {
            header: "Trust, enhanced",
            content:
              "Build trust in scientific findings. Reward quality research and open science practices with verified badges as digitally signed attestations.",
          },
          {
            header: "Credit, where it’s due",
            content:
              "Credit is transparently tracked, and authors can accept new collaborators that have contributed to substantially enrich their work.",
          },
          {
            header: "Access, ensured",
            content:
              "Simple, usable persistent identifiers for your work. No more dead links, content drift, or data silos. Everything is trackable, timestamped, transparent and owned by you.",
          },
        ]}
      />
      <TargetGroups
        header="A new frontier for open science"
        subheader="No single individual, organisation, or institution can do it alone. But collectively, we can create a world in which anyone can participate, collaborate, and contribute toward moving science forward."
        tg1Name="Researchers"
        tg1Argument="Bring your research to life"
        tg2Name="Journals & Curation Communities"
        tg2Argument="Lead open science forward"
        tg3Name="Libraries & Universities"
        tg3Argument="Reclaim institutional sovereignty"
        tg4Name="Application Developers"
        tg5Name="Network Operators"
      />
      <Metrics
        header="A protocol for open science powered by the decentralized web"
        subheader="Come build the next generation of scientific applications on a radically open and extensible protocol."
        cards={[
          {
            caption: "Persistent identifiers issued",
            value: "20,000+",
            subheader: "Uniquely identified digital objects",
          },
          {
            caption: "Data stored",
            value: "20+ Terabytes",
            subheader: "Digital object data secured by the network",
          },
          {
            caption: "Addressable legacy PIDs",
            value: "190M+",
            subheader: "DOIs ready to be upgraded with dPIDs",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
