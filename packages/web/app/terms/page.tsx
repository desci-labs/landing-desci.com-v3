import type { Metadata } from "next";
import NavigationWhiteBG from "@/components/NavigationWhiteBG";
import Footer from "@/components/Footer";
import MarkdownDoc from "@/components/MarkdownDoc";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <main>
      <NavigationWhiteBG />
      <div className="max-w-4xl mx-auto py-32">
        <MarkdownDoc file="terms.md" />
      </div>
      <Footer />
    </main>
  );
}
