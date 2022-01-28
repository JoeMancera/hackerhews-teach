import React from "react";
import { NewsItem } from "components/NewsItem";
import "./styles.css";

export const NewsList = ({ newsList }) => {
  return (
    <div className="newsList">
      {newsList.map((news, index) => (
        <NewsItem key={index} index={index} {...news} />
      ))}
    </div>
  );
};
