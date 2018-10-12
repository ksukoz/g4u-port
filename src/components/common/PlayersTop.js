import React from "react";
import { Collection, CollectionItem, Col } from "react-materialize";

const PlayersTop = props => {
  return (
    <Collection
      className="player-top-list"
      header={
        <div className="player-flex-header">
          <div className="player-top-data">
            <span>1.</span>
            <span className="player-top-number">
              {props.header ? props.header.player.number : ""}
            </span>
            <span>{props.header ? props.header.player.name : ""}</span>
          </div>
          <div className="player-top-img">
            <img
              src={
                props.header ? "//mygame4u.com" + props.header.player.photo : ""
              }
              alt=""
            />
          </div>
        </div>
      }
    >
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
    </Collection>
  );
};

export default PlayersTop;
