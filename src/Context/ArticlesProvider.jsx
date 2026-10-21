import { useState } from "react";
import { ArticlesContext } from "./ArticlesContext";

function ArticlesProvider({ children }) {
  const [cache, setCache] = useState({});

  return (
    <ArticlesContext.Provider value={{ cache, setCache }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
