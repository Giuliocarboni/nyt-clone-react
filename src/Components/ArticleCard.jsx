import { sections } from "../data/sections";

function ArticleCard({ article }) {
  const image = article.multimedia?.find(
    (m) => m.format === "threeByTwoSmallAt2X" || article.multimedia?.[0],
  );
  const sectionName =
    sections.find((s) => s.path === article.section)?.name || article.section;

  return (
    <article className="border-b border-neutral-200 pb-6">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noopener"
        className="group block">
        {image && (
          <img
            src={image.url}
            alt={image.caption || article.title}
            loading="lazy"
            className="mb-3 aspect-[3/2] w-full object-cover"
          />
        )}
        {sectionName && (
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-neutral-500">
            {sectionName}
          </p>
        )}
        <h2 className="font-serif text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] font-bold leading-snug group-hover:underline">
          {article.title}
        </h2>
      </a>
      {article.abstract && (
        <p className="mt-2 font-serif text-sm leading-relaxed text-neutral-700">
          {article.abstract}
        </p>
      )}
      {article.byline && (
        <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">
          {article.byline}
        </p>
      )}
    </article>
  );
}

export default ArticleCard;
