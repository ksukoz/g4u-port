import React, { Component } from "react";
import Promo from "./Promo";
import HomeNews from "./HomeNews";

class Home extends Component {
  render() {
    return (
      <main>
        <Promo />
        <HomeNews />
      </main>
    );
  }
}

export default Home;
