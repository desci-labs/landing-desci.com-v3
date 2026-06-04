import type { Metadata } from "next";
import HeroJournals from "@/components/HeroJournals";
import Overview6 from "@/components/Overview6";
import FeaturesJournals from "@/components/FeaturesJournals";
import Testimonial from "@/components/Testimonial";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DeSci Nodes for Journals",
};

export default function JournalsPage() {
  return (
    <main>
      <HeroJournals
        title="Autonomous Research Communities"
        slogan="Power your journal with the open science infrastructure of tomorrow"
      />
      <Overview6
        header="Scale your impact, not your IT"
        items={[
          {
            header: "Everything in one place",
            content:
              'Researchers can publish data, code, and any other artefacts alongside their manuscripts and submit to your journal. No complicated flowcharts or juggling between Github and repositories. Papers with data receive on average <a href="https://doi.org/10.1371/journal.pone.0230416" class="text-dark-11 font-semibold hover:text-dark-12" target="_blank" rel="noopener noreferrer">25% more citations</a>.',
            icon: "add-outline",
          },
          {
            header: "Qualified referees at your fingertips",
            content:
              "Save time by quickly finding qualified referees to assess a work's merits with our bespoke recommendation system. The recommendation system is under development and not yet publicly available.",
            icon: "shield-outline",
          },
          {
            header: "Fast track peer-review",
            content:
              "Peer-review and editorial exchanges happen directly within the interface, in context of the submitted materials. Benefit from new possibilities to incentivize high-quality peer-review, giving credit where it's due.",
            icon: "cloud-download-outline",
          },
          {
            header: "Focus on what matters",
            content:
              "While you're free to do typesetting, graphic design and JATS-XML data wrangling - you don't need to. You can run lightweight journals that keep costs down and deliver on what matters: trust in research results.",
            icon: "refresh-outline",
          },
          {
            header: "Reach new communities",
            content:
              "Reach communities that care deeply about access to data and software. With Nodes, digital artifacts can be imported and reused with a single line of code, tracking all citations.",
            icon: "analytics-outline",
          },
          {
            header: "Unlock new opportunities",
            content:
              "Issue verified badges that attest to the properties of the research you curate. Make the value of your services visible. Offer new services such as reproducibility checks.",
            icon: "play-forward-outline",
          },
        ]}
      />
      <FeaturesJournals
        header="It's never been this easy to launch a new journal"
        tabs={[
          {
            label: "Submit",
            header: "A better submission experience for your authors, finally",
            content:
              "Authors can easily upload data, code, manuscripts, and any artefacts of their research in a unified interface served directly on your website. No more submission flowcharts, or juggling between GitHub, data repositories, and external sources, leading to a far better experience for your authors. Once ready, authors can publish their work openly and submit directly to your journal or conference with a single click.",
            video: "submit flow.mp4",
            phone: "combine.png",
          },
          {
            label: "Review",
            header: "Improve and accelerate peer-review",
            content:
              "Experience granular multiplayer reviewing in context. Create interactive peer-review reports that extend beyond the manuscript. Decide which aspects reviewers should be focusing on. Explore new workflows for scientific validaiton. The system is designed to fast-track peer-reviews, eliminate cumbersome email exchanges, and give credit to every participant in the curation process.",
            video: "verify.mp4",
            phone: "review.png",
          },
          {
            label: "Curate",
            header: "Curate research for quality",
            content:
              "Editors issue badges that attest to the attributed your curated research: open code, open data, computational reproducibility, peer-reviewed, editor's choice - you name it. With Nodes, you can open the black box of peer-review by making explicit the type of curation services that your scientific community values.",
            video: "curate.mp4",
            phone: "reproducible.png",
          },
        ]}
        integrateSubheader="Integrate the DeSci stack"
        integrateItems={[
          {
            header: "Your website, made simple",
            content:
              "Embed an interface on your website that allows your audience to interact with all artifacts of research, not just manuscripts.",
            icon: "tablet-landscape-outline",
          },
          {
            header: "Storage, taken care of",
            content:
              "The data is securely stored on a distributed network, protected from content drift, and resilient against link rot.",
            icon: "globe-outline",
          },
          {
            header: "PIDs and Metadata, solved",
            content:
              "No more URI:DOI tables to maintain or complex metadata standards to comply with. This is taken care of.",
            icon: "pin-outline",
          },
        ]}
      />
      <Testimonial
        header="Trusted by researchers"
        items={[
          {
            name: "Marco Giometto & Atharva Sate",
            position: "Civil Engineering at Columbia",
            content:
              "Atharva and Marco created a fully reproducible, data heavy publication containing over 18 terabytes of open data. Without Nodes, this breakthrough dataset in fluid dynamics would have remained in his lab's internal servers. Nodes made it possible to easily import parts of this dataset with a single line of python, or send a containerised compute job directly where the data lives.",
            image: "/marco-pfp.jpg",
            link: "https://capybara.desci.com/dpid/76",
          },
          {
            name: "Megan Ansdell",
            position: "Astrophysicist at NASA",
            content:
              "Megan turned her PhD thesis into a Node primarily to share her code with the astrophysics community. During her thesis, she took a lot of care to make her work reproducible. With Nodes she finally has a medium to showcase this effort and share the outcome with everyone. Nodes allowed her to create interactive links between her paper, data, and code.",
            image: "/megan-pfp.jpeg",
            link: "https://capybara.desci.com/dpid/46",
          },
        ]}
      />
      <Cta />
      <Footer />
    </main>
  );
}
