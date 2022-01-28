import React from "react";
import { NewsList } from "components/NewsList";
import { useNews } from "hooks/useNews";
import "./styles.css";

export default function Home() {
  const { newsList, page, setPage } = useNews();
  const handlePageChange = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={handlePageChange}>Next page</button>
      <ul className="newsResult">
        <NewsList newsList={newsList} />
      </ul>
    </>
  );
}
