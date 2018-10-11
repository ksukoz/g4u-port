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

class Command extends Component {
  componentDidMount = () => {
    this.props.getTourCommand(this.props.match.params.id);
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
      <section className="section-command">
        <div
          className="promo"
          style={{
            // tournaments && tournaments.photo
            //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
            //   :
            background: `url(${playerBg}) 50% 50% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="command-info">
            <div className="container">
              <Row>
                <Col m={10}>
                  <img
                    src={
                      command && command.header.logo ? command.header.logo : ""
                    }
                    className="z-depth-2"
                    alt=""
                  />
                  <h1>{command ? command.header.title : ""}</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <Row>
            <MainTable
              l={8}
              // tournamentId={this.props.params.id.split(":")[0]}
              goals={command ? true : ""}
              missed={command ? true : ""}
              title={
                command && command.season.title ? command.season.title : ""
              }
              commands={
                this.props.tournaments && this.props.tournaments.command
                  ? this.props.tournaments.command.commands
                  : []
              }
            />
            <Col s={12} l={4}>
              Контакты
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
        </div>
      </section>
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
)(Command);
