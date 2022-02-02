import React from "react";
import timerIcon from "assets/dateIcon.svg";
import { Favorite } from "components/Favorite";
import { Card, Description, CreatedAt, IconDate, Link } from "./styles";
import "./styles.css";

export const NewsItem = ({ index, newsInfo }) => {
  return (
    <Card myId={index} key={`${index}-${newsInfo.story_id}`}>
      <Link href="#">
        <CreatedAt>
          <IconDate src={timerIcon} alt="" />
          {newsInfo.created_at} by {newsInfo.author}
        </CreatedAt>
        <Description>{newsInfo.story_title}</Description>
      </Link>
      <Favorite infoNews={newsInfo} idNews={index} />
    </Card>
  );
};
