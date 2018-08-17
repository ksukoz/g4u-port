import React, { Component } from "react";
import { connect } from "react-redux";
import Promo from "./Promo";
import HomeNews from "./HomeNews";
import Stats from "./Stats";

class Home extends Component {
  render() {
    return (
      <main>
        <Promo />
        <HomeNews locale={this.props.lang.locale} />
        <Stats locale={this.props.lang.locale} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(
  mapStateToProps,
  null
)(Home);
