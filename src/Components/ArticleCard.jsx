function ArticleCard({ article }) {
  const image = article.multimedia?.[0];

  return (
    <article>
      <a href={article.url} target="_blank" rel="noopener noopener">
        {image && <img src={image.url} alt={image.caption || article.title} />}
      </a>
      <p>{article.abstract}</p>
      <p>{article.byline}</p>
    </article>
  );
}

export default ArticleCard;
