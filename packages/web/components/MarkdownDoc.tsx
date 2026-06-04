import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Server component that renders a markdown file from /content. */
export default function MarkdownDoc({ file }: { file: string }) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content", file),
    "utf8",
  );
  return (
    <div className="markdown-body px-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
    </div>
  );
}
