import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(articles);
  }, []);

  useEffect(() => {
    fetchData();
    console.log(articles);
  }, [category]);

  async function fetchData() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
  }

  return (
    <div>
      <h2 className="text-center">
        latest
        <span className="badge bg-danger">News</span>
      </h2>
      {articles?.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
export default NewsBoard;
