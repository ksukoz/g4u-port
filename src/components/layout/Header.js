import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Navbar, NavItem, Row, Input } from "react-materialize";
import { setLanguage } from "../../actions/languageActions";
import {
  getFranch,
  getLeagues,
  getSubLeagues
} from "../../actions/leagueActions";
import { getNews } from "../../actions/newsActions";
import logo from "./img/logo.svg";

class Header extends Component {
  state = {
    franch: 0,
    leagues: 0,
    subLeagues: 0
  };

  onChangeHandler = e => {
    e.preventDefault();
    this.props.setLanguage(e.target.value);
  };

  onClickHandler = link => {
    this.props.history.push(link);
  };

  onSelectClickHandler = e => {
    e.preventDefault();
  };

  onLeagueChangeHandler = e => {
    this.props.history.push("/news");
    if (e.target.name === "franch") {
      this.props.getLeagues(e.target.value);
      this.props.getNews(`frId=${e.target.value}`);
    }

    if (e.target.name === "leagues") {
      this.props.getSubLeagues(e.target.value);
      this.props.getNews(`lgId=${e.target.value}`);
    }

    // if (e.target.name === "subLeagues") {
    //   this.props.getNews(`sub=${e.target.value}`);
    // }

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  componentWillMount() {
    this.props.getFranch();
  }

  render() {
    const { franch, leagues, subLeagues } = this.props.leagues;

    let franchList;
    let leaguesList;
    let subLeaguesList;

    if (franch !== null) {
      franchList = franch.map(franchItem => (
        <option key={franchItem.frId} value={franchItem.frId}>
          {franchItem.name}
        </option>
      ));
    }
    if (leagues !== null) {
      leaguesList = leagues.map(leaguesItem => (
        <option key={leaguesItem.lgId} value={leaguesItem.lgId}>
          {leaguesItem.name}
        </option>
      ));
    }

    if (subLeagues !== null) {
      subLeaguesList = subLeagues.map(subLeaguesItem => (
        <option key={subLeaguesItem.sblgId} value={subLeaguesItem.sblgId}>
          {subLeaguesItem.name}
        </option>
      ));
    }

    return (
      <Navbar brand={<img src={logo} alt="" />} right fixed>
        <NavItem onClick={this.onClickHandler.bind(this, "/")}>
          <FormattedMessage id="header.main" />
        </NavItem>
        <NavItem onClick={this.onClickHandler.bind(this, "/news")}>
          <FormattedMessage id="header.news" />
        </NavItem>
        <NavItem onClick={this.onClickHandler.bind(this, "/leagues")}>
          <FormattedMessage id="header.leagues" />
        </NavItem>
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              name="franch"
              label="Materialize Select"
              defaultValue={this.state.franch}
              onChange={this.onLeagueChangeHandler}
            >
              <option value={0} disabled>
                Выбрать партнера
              </option>
              {franchList ? franchList : <option value={0} disabled />}
            </Input>
          </Row>
        </NavItem>
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              name="leagues"
              label="Materialize Select"
              defaultValue={this.state.leagues}
              onChange={this.onLeagueChangeHandler}
            >
              <option value={0} disabled>
                Выбрать лигу
              </option>
              {leaguesList ? leaguesList : <option value={0} disabled />}
            </Input>
          </Row>
        </NavItem>
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              name="subLeagues"
              label="Materialize Select"
              defaultValue={this.state.subLeagues}
              onChange={this.onLeagueChangeHandler}
            >
              <option value={0} disabled>
                Выбрать подлигу
              </option>
              {subLeaguesList ? subLeaguesList : <option value={0} disabled />}
            </Input>
          </Row>
        </NavItem>
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              label="Materialize Select"
              defaultValue={this.props.lang.locale}
              onChange={this.onChangeHandler}
            >
              <option value="en-US">English</option>
              <option value="ru-RU">Русский</option>
              <option value="uk">Українська</option>
            </Input>
          </Row>
        </NavItem>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { setLanguage, getFranch, getLeagues, getSubLeagues, getNews }
)(Header);
