import React, { useEffect, useState } from "react";
import News from "./components/news";
import { Loading } from "./components/loading";
import Search from "./components/search";

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=news&apiKey=62550df43e8c41618e98cdc0cc1fc806`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (query.length) {
      try {
        fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=62550df43e8c41618e98cdc0cc1fc806`
        )
          .then((response) => response.json())
          .then((data) => setNews(data.articles));
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }

    setQuery("");
  };
  if (!news.length) return <Loading />;
  return (
    <div className="app-main">
      <div>
        <Search query={query} setQuery={setQuery} onSubmit={onSubmit} />
      </div>

      <div className="app">
        {news.map((item, index) => (
          <News news={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
