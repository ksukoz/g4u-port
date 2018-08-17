import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Navbar, NavItem, Row, Input } from "react-materialize";
import { setLanguage } from "../../actions/languageActions";
import logo from "./img/logo.svg";

class Header extends Component {
  onChangeHandler = e => {
    e.preventDefault();
    this.props.setLanguage(e.target.value);
  };

  onClickHandler = link => {
    // e.preventDefault();
    this.props.history.push(link);
  };

  onSelectClickHandler = e => {
    e.preventDefault();
  };

  render() {
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
  lang: state.lang
});

export default connect(
  mapStateToProps,
  { setLanguage }
)(Header);
