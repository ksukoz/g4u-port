import React, { Component } from "react";
import Promo from "./Promo";
import HomeNews from "./HomeNews";
import Stats from "./Stats";

class Home extends Component {
  render() {
    return (
      <main>
        <Promo />
        <HomeNews />
        <Stats />
      </main>
    );
  }
}

export default Home;
