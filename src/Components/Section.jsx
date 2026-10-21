import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function Section() {
  const { section = "home" } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setArticles([]);
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`,
      )
      .then((res) => {
        const withTitle = res.data.results.filter((article) => article.title);
        setArticles(withTitle.slice(0, 15));
      })
      .catch((err) => {
        console.error(err);
        if (err.response?.status === 429) {
          setError("Too many requests. Please wait a minute and try again.");
        } else {
          setError("Could not load articles. Please try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [section]);
  return (
    <div>
      <h1>{section}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {articles.map((article) => (
        <ArticleCard key={article.uri} article={article} />
      ))}
    </div>
  );
}

export default Section;
