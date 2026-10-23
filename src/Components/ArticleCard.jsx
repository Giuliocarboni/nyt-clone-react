function ArticleCard({ article }) {
  const image = article.multimedia?.find(
    (m) => m.format === "threeByTwoSmallAt2X" || article.multimedia?.[0],
  );

  return (
    <article>
      <a href={article.url} target="_blank" rel="noopener noopener">
        {image && (
          <img
            src={image.url}
            alt={image.caption || article.title}
            loading="lazy"
          />
        )}
        <h2>{article.title}</h2>
      </a>
      {article.abstract && <p>{article.abstract}</p>}
      {article.byline && <p>{article.byline}</p>}
    </article>
  );
}

export default ArticleCard;
