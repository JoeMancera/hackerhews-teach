import React, { useState, useEffect } from "react";

const INITIAL_PAGE = 0;

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${INITIAL_PAGE}`
    )
      .then((response) => response.json())
      .then((data) => setNewsList(data.hits));
    console.log("list", newsList);
  }, [setNewsList]);

  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setNewsList(data.hits));
    console.log("page", page, newsList);
  }, [page, setNewsList]);

  const handlePageChange = () => {
    // TODO: it's not workig withou setNewsList
    setNewsList([]);
    setPage(page + 1);
  };

  return (
    <>
      <h2>Home</h2>
      <ul>
        <button onClick={handlePageChange}>Next page</button>
        {newsList.map((news) => (
          <li key={news.story_id}>
            {news.author} - {news.story_title}
          </li>
        ))}
      </ul>
    </>
  );
}
