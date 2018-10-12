import React from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Input,
  Button,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";

const ResultsTable = props => {
  return (
    <Col s={12} l={props.l}>
      <div>
        {props.noFilter ? (
          ""
        ) : (
          <Row>
            <Input
              s={3}
              type="select"
              name="tour"
              value={props.stateTour}
              onChange={props.onChangeHandler}
              className="black-text"
            >
              <option value={0} disabled>
                Тур
              </option>
              {props.tour ? (
                props.tour.map(tourItem => (
                  <option key={tourItem} value={tourItem}>
                    {tourItem}
                  </option>
                ))
              ) : (
                <option value={0} disabled />
              )}
            </Input>
            <Input
              s={3}
              type="select"
              name="club"
              value={props.stateClub}
              onChange={props.onChangeHandler}
              className="black-text"
            >
              <option value={0} disabled>
                Команда
              </option>
              {props.clubs ? (
                props.clubs.map(command => (
                  <option key={command.comId} value={command.comId}>
                    {command.title}
                  </option>
                ))
              ) : (
                <option value={0} disabled />
              )}
            </Input>
            <Input
              s={3}
              type="select"
              name="stadium"
              // label="Materialize Select"
              value={props.stateStadium}
              onChange={props.onChangeHandler}
              className="black-text"
            >
              <option value={0} disabled>
                Стадион
              </option>
              {props.stadiums ? (
                props.stadiums.map(stadium => (
                  <option key={stadium.id} value={stadium.id}>
                    {stadium.title}
                  </option>
                ))
              ) : (
                <option value={0} disabled />
              )}
            </Input>
            <Col s={3}>
              <Button
                waves="green"
                className="btn--outline"
                onClick={props.onClearClickHadler}
              >
                Сбросить
              </Button>
            </Col>
          </Row>
        )}
      </div>
      <div className="z-depth-2 result-table-wrap">
        {props.gamelist.map((game, i) => (
          <div className="highlight result-table" key={game.date + i}>
            <div>
              <h4>{game.date}</h4>
            </div>
            <div>
              {game.games.map(calendarGame => (
                <Link
                  to={`/game/${calendarGame.game_id}`}
                  key={calendarGame.game_id}
                  className="result-table-row"
                >
                  <div className="result-table-date">{calendarGame.date}</div>
                  <div className="result-table-game">
                    <div className="result-table-col right">
                      <span className=" right-align">
                        {calendarGame.in.title}
                      </span>
                      <img
                        className=" right-align"
                        src={calendarGame.in.logo}
                        alt=""
                        style={{ height: 25, marginLeft: 8 }}
                      />
                    </div>
                    <div className="result-table-score">
                      {calendarGame.score}
                    </div>
                    <div className="result-table-col">
                      <img
                        src={calendarGame.out.logo}
                        alt=""
                        style={{ height: 25, marginRight: 8 }}
                      />
                      <span>{calendarGame.out.title}</span>
                    </div>
                  </div>
                  <div className="result-table-stadium">
                    {calendarGame.stadium}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default ResultsTable;
