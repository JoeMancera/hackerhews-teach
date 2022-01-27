import React from "react";
import { NewsItem } from "components/NewsItem";

export const NewsList = ({ newsList }) => {
  return (
    <>
      {newsList.map((news, index) => (
        <NewsItem key={index} index={index} {...news} />
      ))}
    </>
  );
};
