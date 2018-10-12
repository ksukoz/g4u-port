import React from "react";

import { Link } from "react-router-dom";
import { Collection, CollectionItem, Col } from "react-materialize";

const PlayersTop = props => {
  return props.type === "top" ? (
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
            <img src={props.header ? props.header.player.photo : ""} alt="" />
          </div>
        </div>
      }
    >
      {props.players
        ? props.players.map((player, i) => (
            <CollectionItem>
              <span>
                {i + 2}. {player.player.name}
              </span>
              <span>{player.player.points}</span>
            </CollectionItem>
          ))
        : ""}
    </Collection>
  ) : (
    <Collection
      className="player-top-list"
      header={
        <div className="player-flex-header">
          <div className="player-top-data">
            <span className="player-top-number">
              {props.player ? props.player.number : ""}
            </span>
            <span>
              {props.player
                ? `${props.player.name} ${props.player.surename}`
                : ""}
            </span>
          </div>
          <div className="player-top-img">
            <img src={props.player ? props.player.photo : ""} alt="" />
          </div>
        </div>
      }
    >
      {props.player ? (
        <CollectionItem>
          <div className="player-flex-collection">
            <span className="player-collection-title">Позиция</span>
            <span>{props.player.type}</span>
          </div>
          <div className="player-flex-collection">
            <span className="player-collection-title">Возраст</span>
            <span>{props.player.age}</span>
          </div>
          <Link
            className="player-collection-link"
            to={`/player/${props.player.plId}`}
          >
            Подробнее &#x2192;
          </Link>
        </CollectionItem>
      ) : (
        ""
      )}
    </Collection>
  );
};

export default PlayersTop;
