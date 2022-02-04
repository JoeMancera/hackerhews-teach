import React from "react";
import { NewsList } from "components/NewsList";
import { NewsResult } from "components/NewsResult";
import { useNews } from "hooks/useNews";

export default function Home() {
  const { newsList, page, setPage } = useNews();
  const handlePageChange = () => {
    setPage(page + 1);
  };

  return (
    <>
      <button onClick={handlePageChange}>Next page</button>
      <NewsResult>
        <NewsList newsList={newsList} />
      </NewsResult>
    </>
  );
}
