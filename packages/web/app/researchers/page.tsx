import type { Metadata } from "next";
import HeroResearchers from "@/components/HeroResearchers";
import Announcement from "@/components/Announcement";
import Overview6 from "@/components/Overview6";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DeSci Nodes for Researchers",
};

export default function ResearchersPage() {
  return (
    <main>
      <HeroResearchers
        title="DeSci Nodes"
        slogan="Manuscripts, data, and code — all in one place"
      />
      <Announcement />
      <Overview6
        header="Bring your research to life"
        subheader="Because your work is more than just a PDF"
        items={[
          {
            header: "Bring everything together",
            content:
              "Code, data, and manuscripts — all in one place &amp; richly interconnected. No more juggling between repositories, preprint servers, and Github.",
            icon: "layers-outline",
          },
          {
            header: "Store 100 GB for free",
            content:
              'Add a powerful data drive to your research. Publications with data get on average <a href="https://doi.org/10.1371/journal.pone.0230416" class="text-dark-11 font-semibold hover:text-dark-12" target="_blank" rel="noopener noreferrer">25% more citations</a>.',
            icon: "arrow-redo-outline",
          },
          {
            header: "Keep track of changes",
            content:
              "From registering your hypothesis to uploading a dataset or complete manuscript, you can track all versions and elements from the moment you start using Nodes.",
            icon: "code-slash-outline",
          },
          {
            header: "Own your research",
            content:
              "You decide when to share your research with the world. Once published, your work is shared on a peer-to-peer network. No platform boundaries, vendor-lock in, or data silos.",
            icon: "key-outline",
          },
          {
            header: "Make reproducibility look simple",
            content:
              "Preserve your code and data to keep track of how you obtained your findings over time. Make it easy for yourself and others to reproduce your work. Show them how it's done.",
            icon: "play-forward-outline",
          },
          {
            header: "Lead Open Science forward",
            content:
              "Publish all the artifacts of your research, enable others to reproduce, re-use, and credit every component of your work. Let others import your artifacts with a single line of code.",
            icon: "lock-open-outline",
          },
        ]}
      />
      <Features
        header="A new unit of knowledge for the next era of science"
        tabs={[
          {
            label: "Combine",
            header: "A cutting-edge data drive for your publication",
            content:
              "Nodes are containers for research artefacts such as manuscripts, code, data, and anything you can think of. You can upload everything in one place, share privately with your lab and co-authors before publishing openly to the world. Nodes preserves content integrity with cryptographic hashes and stores published data on a distributed network.",
            video: "combine.mp4",
            phone: "combine.png",
          },
          {
            label: "Connect",
            header: "Connect your research artefacts in a seamless and secure way",
            content:
              "Nodes make reproducible research easier. The nodes application interfaces with a protocol that uses content-addressed storage to create unique and persistent identifiers for every single resource in your Drive. Unlike URL-based web resources, you can create hyperlinks that will stand the test of time. This means you can highlight your manuscripts and connect results with code and data. No more dead links or content drift.",
            video: "connect.mp4",
            phone: "connect.png",
          },
          {
            label: "Showcase",
            header: "Your research is more than a manuscript",
            content:
              "With Nodes, you can seamlessly unite text, data, code, and other artefacts all in one place. It's a workflow platform that transforms into an open repository, and vice-versa. Create impressive publications that showcase the depth and intricacies of your work. Let others import your artifacts with a single line of code.",
            video: "showcase.mp4",
            phone: "showcase.png",
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
              "Atharva and Marco created a fully reproducible, data-heavy publication containing over 18 terabytes of open data. Without Nodes, this breakthrough dataset in fluid dynamics would have remained in his lab's internal servers. Nodes made it possible to easily import parts of this dataset with a single line of python, or send a containerised compute job directly to where the data lives.",
            image: "/marco-pfp.jpg",
            link: "https://nodes.desci.com/dpid/76",
          },
          {
            name: "Megan Ansdell",
            position: "Astrophysicist at NASA",
            content:
              "Megan turned her PhD thesis into a Node, primarily to share her code with the astrophysics community. During her thesis, she took a lot of care to make her work reproducible. With Nodes she finally has a medium to showcase this effort and share the outcome with everyone. Nodes allows her to create interactive links between her paper, data, and code.",
            image: "/megan-pfp.jpeg",
            link: "https://nodes.desci.com/dpid/46",
          },
        ]}
      />
      <Cta />
      <Footer />
    </main>
  );
}
