import React from "react";
import timerIcon from "assets/dateIcon.svg";
import "./styles.css";

export const NewsItem = ({
  index,
  author,
  story_id,
  story_title,
  created_at,
}) => {
  return (
    <li className="card" key={`${index}-${story_id}`}>
      <span>
        <img className="timerIcon" src={timerIcon} alt="" />
        {created_at} by {author}
      </span>
      <p>{story_title}</p>
    </li>
  );
};
