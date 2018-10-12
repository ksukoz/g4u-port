import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourCommand } from "../../actions/tournamentActions";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Navbar,
  Button,
  Input,
  Collection
} from "react-materialize";
import playerBg from "./img/player-bg.png";
import PlayerIcon from "./img/player.svg";
import CollectionItem from "react-materialize/lib/CollectionItem";
import MainTable from "../common/MainTable";
import MatchesTable from "../common/MatchesTable";
import PlayersTop from "../common/PlayersTop";

class CommandOverview extends Component {
  componentDidMount = () => {
    this.props.getTourCommand(this.props.id);
  };

  render() {
    const { command } = this.props.tournaments;

    let gamesList;
    let playersArr = [];
    let playersList;

    if (command) {
      for (let key in command.consist) {
        playersList = (
          <Collection className="command-data-list">
            <h3>{key}</h3>
            {command.consist[key].map(player => (
              <CollectionItem className="command-data-item">
                {player.number}. {player.name} {player.surename}
              </CollectionItem>
            ))}
          </Collection>
        );
        playersArr.push(playersList);
      }
    }

    return (
      <Row>
        <Col s={12} l={8}>
          <MainTable
            l={12}
            // tournamentId={this.props.params.id.split(":")[0]}
            goals={command ? true : ""}
            missed={command ? true : ""}
            title={command && command.season.title ? command.season.title : ""}
            commands={
              this.props.tournaments && this.props.tournaments.command
                ? this.props.tournaments.command.commands
                : []
            }
          />
          <Row>
            <MatchesTable
              l={6}
              title="Календарь"
              games={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.begingames
                  : []
              }
            />
            <MatchesTable
              l={6}
              title="Последние матчи"
              games={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.lastgames
                  : []
              }
            />
          </Row>
          <Col s={12} l={6}>
            <h2 className="command-top-title">Гол</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal.slice(1)
                  : []
              }
            />
          </Col>
          <Col s={12} l={6}>
            <h2 className="command-top-title">Ассистенты</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.assist[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.assist.slice(1)
                  : []
              }
            />
          </Col>
          {/* <Col s={12} l={6}>
            <h2 className="command-top-title">Гол + Пас</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal.slice(1)
                  : []
              }
            />
          </Col>
          <Col s={12} l={6}>
            <h2 className="command-top-title">Очки</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.goal.slice(1)
                  : []
              }
            />
          </Col> */}
          <Col s={12} l={6}>
            <h2 className="command-top-title">Матчи</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.game[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.game.slice(1)
                  : []
              }
            />
          </Col>
          <Col s={12} l={6}>
            <h2 className="command-top-title">Карточки</h2>
            <PlayersTop
              header={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.cart[0]
                  : ""
              }
              players={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.top.cart.slice(1)
                  : []
              }
            />
          </Col>
        </Col>
        <Col s={12} l={4}>
          <div className="command-data z-depth-1">
            <h2 className="command-header">Контакты</h2>
          </div>
        </Col>
        <Col s={12} l={4}>
          <div className="command-data z-depth-1">
            <h2 className="command-header">Информация</h2>
            <Collection className="command-data-list">
              <CollectionItem className="command-data-item">
                <span className="title">Количество игроков:</span>
                <span>{command ? command.info.countPl : ""}</span>
              </CollectionItem>
              <CollectionItem className="command-data-item">
                <span className="title">Средний возраст:</span>
                <span>{command ? command.info.average : ""}</span>
              </CollectionItem>
            </Collection>
          </div>
        </Col>

        <Col s={12} l={4}>
          <div className="z-depth-1" style={{ borderRadius: 10 }}>
            <h2 className="command-header">Состав</h2>
            {playersArr.map(player => player)}
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourCommand }
)(CommandOverview);
