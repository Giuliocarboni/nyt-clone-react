import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

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
      <ul>
        {articles.map((article) => (
          <li key={article.uri}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Section;
