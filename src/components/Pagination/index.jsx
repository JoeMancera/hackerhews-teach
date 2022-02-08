import React from "react";

export const Pagination = ({ onClick }) => {
  const page = Array.from(Array(10).keys());
  return (
    <div>
      {page.map((page) => {
        return <button onClick={() => onClick(page)}>{page + 1}</button>;
      })}
    </div>
  );
};
