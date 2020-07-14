import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.scss";
import months from "./utils/months";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=True"
    )
      .then((data) => {
        const response = data.json();
        return response;
      })
      .then((res) => {
        const formattedArticles = res.map((article) => {
          return {
            title: article.title.rendered,
            image: article._embedded["wp:featuredmedia"][0].source_url,
            day: article._start_day,
            month: months[article._start_month],
            year: article._start_year,
            author: article._embedded.author[0].name,
            authorLink: article._embedded.author[0].link,
            id: article.id,
          };
        });
        setArticles(formattedArticles);
      });
  }, []);

  return (
    <div>
      <div className="container">
        {articles.map((article) => {
          return <Card article={article} key={article.id} />;
        })}
      </div>
    </div>
  );
}
