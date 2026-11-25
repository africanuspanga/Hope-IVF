/* eslint-disable @next/next/no-img-element -- CMS images can come from any uploaded URL */
import Link from "next/link";
import { parseInline, parseMarkdown, type Block } from "@/lib/cms/markdown";

type Classes = Partial<Record<"h2" | "h3" | "p" | "ul" | "ol" | "li" | "quote" | "img" | "a", string>>;

const DEFAULTS: Required<Classes> = {
  h2: "mt-10 mb-4 text-2xl font-bold text-deep-text",
  h3: "mt-8 mb-3 text-xl font-bold text-deep-text",
  p: "mb-5 text-base md:text-lg leading-relaxed text-deep-text/75",
  ul: "mb-6 list-disc space-y-2 pl-6 text-base md:text-lg text-deep-text/75",
  ol: "mb-6 list-decimal space-y-2 pl-6 text-base md:text-lg text-deep-text/75",
  li: "leading-relaxed",
  quote: "mb-6 rounded-2xl border-l-4 border-brand-magenta bg-soft-pink px-5 py-4 text-base text-deep-text/80",
  img: "my-8 w-full rounded-2xl",
  a: "font-semibold text-brand-teal underline underline-offset-4 hover:text-brand-magenta",
};

export function Inline({ text, linkClass }: { text: string; linkClass?: string }) {
  return (
    <>
      {parseInline(text).map((part, i) => {
        if (part.kind === "bold") return <strong key={i}>{part.text}</strong>;
        if (part.kind === "italic") return <em key={i}>{part.text}</em>;
        if (part.kind === "link") {
          return part.href.startsWith("/") ? (
            <Link key={i} href={part.href} className={linkClass}>
              {part.text}
            </Link>
          ) : (
            <a key={i} href={part.href} className={linkClass} target="_blank" rel="noopener noreferrer">
              {part.text}
            </a>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}

export function RichText({
  source,
  blocks,
  classes,
}: {
  source?: string | null;
  blocks?: Block[];
  classes?: Classes;
}) {
  const c = { ...DEFAULTS, ...classes };
  const items = blocks ?? parseMarkdown(source);

  return (
    <>
      {items.map((block, i) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={i} className={c.h2}>
                <Inline text={block.text} linkClass={c.a} />
              </h2>
            ) : (
              <h3 key={i} className={c.h3}>
                <Inline text={block.text} linkClass={c.a} />
              </h3>
            );
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag key={i} className={block.ordered ? c.ol : c.ul}>
                {block.items.map((item, j) => (
                  <li key={j} className={c.li}>
                    <Inline text={item} linkClass={c.a} />
                  </li>
                ))}
              </ListTag>
            );
          }
          case "quote":
            return (
              <blockquote key={i} className={c.quote}>
                <Inline text={block.text} linkClass={c.a} />
              </blockquote>
            );
          case "image":
            return <img key={i} src={block.src} alt={block.alt} loading="lazy" className={c.img} />;
          default:
            return (
              <p key={i} className={c.p}>
                <Inline text={block.text} linkClass={c.a} />
              </p>
            );
        }
      })}
    </>
  );
}
