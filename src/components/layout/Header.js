import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Navbar, NavItem, Row, Input } from "react-materialize";
import { setLanguage } from "../../actions/languageActions";
import { getFranch, getLeagues, getCities } from "../../actions/leagueActions";
import { getNews } from "../../actions/newsActions";
import logo from "./img/logo.svg";

class Header extends Component {
  state = {
    franch: 0,
    leagues: 0,
    city: 0
  };

  onChangeHandler = e => {
    e.preventDefault();
    this.props.setLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  onClickHandler = link => {
    this.props.history.push(link);
  };

  onSelectClickHandler = e => {
    e.preventDefault();
  };

  onLeagueChangeHandler = e => {
    this.props.history.push("/news");

    if (e.target.name === "leagues") {
      this.props.getCities(e.target.value);
      this.props.getNews(`lgId=${e.target.value}`);
    }
    if (e.target.name === "city") {
      this.props.history.push(`/tournaments/${e.target.value}`);
    }

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  componentWillMount() {
    this.props.getLeagues();
  }

  render() {
    const { leagues, cities } = this.props.leagues;

    let leaguesList;
    let citiesList;

    if (leagues !== null) {
      leaguesList = leagues.map(leaguesItem => (
        <option key={leaguesItem.lgId} value={leaguesItem.lgId}>
          {leaguesItem.name}
        </option>
      ));
    }

    if (cities) {
      citiesList = cities.map(city => (
        <option key={city.cId} value={city.cId}>
          {city.name} ({city.tours})
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
        {/* <NavItem onClick={this.onSelectClickHandler}>
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
        </NavItem> */}
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              name="leagues"
              // label="Materialize Select"
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
              name="city"
              // label="Materialize Select"
              defaultValue={this.state.city}
              onChange={this.onLeagueChangeHandler}
            >
              <option value={0} disabled>
                Выбрать подлигу
              </option>
              {citiesList ? citiesList : <option value={0} disabled />}
            </Input>
          </Row>
        </NavItem>
        <NavItem onClick={this.onSelectClickHandler}>
          <Row className="header-select">
            <Input
              s={12}
              type="select"
              // label="Materialize Select"
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
  { setLanguage, getFranch, getLeagues, getCities, getNews }
)(Header);
