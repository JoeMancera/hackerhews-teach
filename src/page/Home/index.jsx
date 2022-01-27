import React from "react";
import { NewsList } from "components/NewsList";
import { useNews } from "hooks/useNews";

export default function Home() {
  const { newsList, page, setPage } = useNews();
  const handlePageChange = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h2>Home</h2>
      <ul>
        <button onClick={handlePageChange}>Next page</button>
        <NewsList newsList={newsList} />
      </ul>
    </>
  );
}
