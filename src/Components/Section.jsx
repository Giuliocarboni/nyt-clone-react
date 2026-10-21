import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Section() {
  const { section = "home" } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`,
      )
      .then((res) => console.log(res.data.results))
      .catch((err) => console.error(err));
  }, [section]);
  return <h1>{section}</h1>;
}

export default Section;
