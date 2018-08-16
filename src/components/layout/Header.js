import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavItem, Row, Input } from "react-materialize";
import { setLanguage } from "../../actions/languageActions";

class Header extends Component {
  onChangeHandler = e => {
    e.preventDefault();
    this.props.setLanguage(e.target.value);
  };

  onClickHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Navbar brand="logo" right>
        <NavItem onClick={() => console.log("test click")}>
          Getting started
        </NavItem>
        <NavItem href="components.html">Components</NavItem>
        <NavItem onClick={this.onClickHandler}>
          <Row>
            <Input
              s={12}
              type="select"
              label="Materialize Select"
              defaultValue={this.props.lang.locale}
              onChange={this.onChangeHandler}
            >
              <option value="en-US">English</option>
              <option value="uk">Ukrainian</option>
              <option value="ru-RU">Russian</option>
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
