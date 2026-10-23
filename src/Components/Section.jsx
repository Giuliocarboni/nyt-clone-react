import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import NotFound from "./NotFound";
import { ArticlesContext } from "../Context/ArticlesContext";
import { sections } from "../data/sections";

function Section() {
  const { section = "home" } = useParams();
  const { cache, setCache } = useContext(ArticlesContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isValid =
    section === "home" || sections.some((s) => s.path === section);
  const articles = cache[section] || [];

  useEffect(() => {
    if (!isValid) return;

    setError(null);

    if (cache[section]) {
      setLoading(false);
      return;
    }

    setLoading(true);

    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`,
      )
      .then((res) => {
        const withTitle = res.data.results.filter((article) => article.title);
        setCache((prev) => ({ ...prev, [section]: withTitle.slice(0, 15) }));
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
  }, [section, cache, setCache, isValid]);

  if (!isValid) {
    return <NotFound />;
  }

  return (
    <main className="px-4 pb-12 mt-5">
      <div className="mx-auto max-w-[1200px]">
        {loading && <p>Loading articles</p>}
        {error && <p>{error}</p>}
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.uri} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Section;
