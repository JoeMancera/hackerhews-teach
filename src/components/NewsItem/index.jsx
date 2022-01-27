import React from "react";

export const NewsItem = ({ index, author, story_id, story_title }) => {
  return (
    <li key={`${index}-${story_id}`}>
      {index} - {author} - {story_title}
    </li>
  );
};
