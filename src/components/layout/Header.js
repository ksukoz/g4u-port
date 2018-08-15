import React, { Component } from "react";
import { Navbar, NavItem, Row, Input } from "react-materialize";

class Header extends Component {
  render() {
    return (
      <Navbar brand="logo" right>
        <NavItem onClick={() => console.log("test click")}>
          Getting started
        </NavItem>
        <NavItem href="components.html">Components</NavItem>
        <NavItem>
          <Row>
            <Input
              s={12}
              type="select"
              label="Materialize Select"
              defaultValue="2"
            >
              <option value="en-US">English</option>
              <option value="uk-UK">Ukrainian</option>
              <option value="ru-RU">Russian</option>
            </Input>
          </Row>
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;
