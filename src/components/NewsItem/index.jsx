import React from "react";
import timerIcon from "assets/dateIcon.svg";
import { Card, Description, CreatedAt, IconDate } from "./styles";
import "./styles.css";

export const NewsItem = ({
  index,
  author,
  story_id,
  story_title,
  created_at,
}) => {
  return (
    <Card myId={index} key={`${index}-${story_id}`}>
      <CreatedAt>
        <IconDate src={timerIcon} alt="" />
        {created_at} by {author}
      </CreatedAt>
      <Description>{story_title}</Description>
    </Card>
  );
};
