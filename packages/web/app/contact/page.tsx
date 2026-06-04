import type { Metadata } from "next";
import NavigationWhiteBG from "@/components/NavigationWhiteBG";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <NavigationWhiteBG />
      <div className="max-w-4xl mx-auto py-32">
        <div style={{ overflow: "hidden", marginTop: "-100px" }}>
          <iframe
            title="Contact DeSci Labs"
            src="https://v1.desci.com/contact"
            width="100%"
            className="md:h-[680px] h-[580px]"
            style={{ marginTop: "-100px", overflow: "hidden" }}
            scrolling="no"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
