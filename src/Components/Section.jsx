import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function Section() {
  const { section = "home" } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`,
      )
      .then((res) => {
        const withTitle = res.data.results.filter((article) => article.title);
        setArticles(withTitle.slice(0, 15));
      })
      .catch((err) => console.error(err));
  }, [section]);
  return (
    <div>
      <h1>{section}</h1>
      {articles.map((article) => (
        <ArticleCard key={article.uri} article={article} />
      ))}
    </div>
  );
}

export default Section;
