import type { Metadata } from "next";
import HeroInstitutions from "@/components/HeroInstitutions";
import Overview6 from "@/components/Overview6";
import Overview3 from "@/components/Overview3";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DeSci Nodes for Institutions",
};

export default function InstitutionsPage() {
  return (
    <main>
      <HeroInstitutions
        title="DeSci Nodes"
        slogan="Protecting institutional sovereignty during the next era of science"
      />
      <Overview6
        header="Research data management made easy"
        items={[
          {
            header: "Own your data, share it seamlessly",
            content:
              "DeSci Labs uses decentralized technology to seamlessly connect researchers, publishers, and libraries. Through Nodes, publishers can disseminate your data without ever taking it off your server.",
            icon: "layers-outline",
          },
          {
            header: "Use PID containers to organize PID collections",
            content:
              "Simplify the way you manage research data by grouping related PIDs into intuitive collections. Anyone can make a PID container.",
            icon: "code-slash-outline",
          },
          {
            header: "Make metadata easy for your researchers",
            content:
              "Created by researchers for researchers, these controlled vocabularies and ontologies are an important part of making data findable, accessible, interoperable, and reusable (FAIR).",
            icon: "arrow-redo-outline",
          },
          {
            header: "Get ahead of the compliance curve",
            content:
              'The <a href="https://doi.org/10.1371/journal.pone.0230416" class="text-dark-11 font-semibold hover:text-dark-12" target="_blank" rel="noopener noreferrer">FAIR principles</a> and research software management are coming. Make sure your institution is prepared to meet all funder requirements. We can help you to stay ahead in the fast-evolving landscape of data management and open science mandates.',
            icon: "key-outline",
          },
          {
            header: "Help your researchers improve their impact",
            content:
              'Manuscripts with data receive on average <a href="https://doi.org/10.1371/journal.pone.0230416" class="text-dark-11 font-semibold hover:text-dark-12" target="_blank" rel="noopener noreferrer">25% more citations.</a> By making data sharing easy, you increase the impact of your researchers and your institution.',
            icon: "play-forward-outline",
          },
          {
            header: "Accelerate open science",
            content:
              "Join the vanguard of the open science movement. By leveraging our fully open-source technologies, you contribute to a culture of transparency, accessibility, and collaboration in the scientific community, fostering innovation and trust.",
            icon: "lock-open-outline",
          },
        ]}
      />
      <Overview3
        header="Truly persistent identifiers with super-powers for all your content"
        items={[
          {
            header: "Automatically generate a PID for every file you upload",
            content:
              "Every file needs a PID, you can simplify PID provisioning through a simple drag-and-drop process. DeSci Labs Technology takes a fingerprint of every file the moment it’s uploaded. These data fingerprints are based on the content in the file, making them completely immune to content drift. You can rest easy knowing that your data is safe on your servers.",
          },
          {
            header: "Control who has access to data, both internally and externally",
            content:
              "While open data should be the standard, IP and privacy restrictions need to be taken into account. Through DeSci Nodes technology, you can make identity and access management easy. The RDM interface integrates with Microsoft for internal employees and ORCID for external collaborators.",
          },
          {
            header:
              "Keep track of your data across publications, labs, and departments",
            content:
              "By using PID Containers to organize your data, you get the flexibility to track data usage at all levels of research. Gain visibility into the complete lifecycle of your research data, from generation to publication. Setting up your researchers is as easy as a download and a training course, we'll be here to help you along the way.",
          },
        ]}
      />
      <Cta />
      <Footer />
    </main>
  );
}
