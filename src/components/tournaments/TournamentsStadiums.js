import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourStadiums } from "../../actions/tournamentActions";

import { compose, withProps, lifecycle } from "recompose";

import {
  Row,
  Col,
  Input,
  Button,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";
import MatchesTable from "../common/MatchesTable";
import MainTable from "../common/MainTable";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoBox
} from "react-google-maps";
import TournamentHeader from "./TournamentHeader";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwlzhR2g7O7r4r4pwVUz-Hc60Oz4T3GqY&language=en&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: (
      <div
        style={{
          height: `100%`,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      />
    )
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidUpdate() {}
  })
)(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={props.defaultCenter}
    onClick={props.onClick}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
        onClick={props.onToggleOpen}
      />
    )}
  </GoogleMap>
));

class TournamentsStadiums extends Component {
  componentDidMount = () => {
    this.props.getTourStadiums(this.props.match.params.id);
  };

  render() {
    const { stadiums } = this.props.tournaments;

    let stadiumsList;

    if (stadiums !== null) {
      stadiumsList = stadiums.stadiums.map(
        stadium =>
          stadium.stId !== "0" ? (
            <Col s={12} key={stadium.stId}>
              <div className="z-depth-2 stadium-card">
                <div className="stadium-header">
                  <h4>{stadium.stitle}</h4>
                  <address>{stadium.address}</address>
                </div>
                <MyMapComponent
                  isMarkerShown
                  defaultCenter={{
                    lat: parseFloat(stadium.latitude),
                    lng: parseFloat(stadium.longitude)
                  }}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwlzhR2g7O7r4r4pwVUz-Hc60Oz4T3GqY&language=en&libraries=geometry,drawing,places"
                  lat={parseFloat(stadium.latitude)}
                  lng={parseFloat(stadium.longitude)}
                />
              </div>
            </Col>
          ) : (
            ""
          )
      );
    }

    return (
      <section className="section-tournament-main">
        <TournamentHeader id={this.props.match.params.id} />
        <div className="container">
          <Row>
            <Col s={12} l={8}>
              {stadiumsList}
            </Col>

            <Col s={12} l={4}>
              <MainTable
                l={12}
                title="Таблица"
                commands={
                  this.props.tournaments && this.props.tournaments.stadiums
                    ? this.props.tournaments.stadiums.table
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Последние матчи"
                games={
                  this.props.tournaments && this.props.tournaments.stadiums
                    ? this.props.tournaments.stadiums.lastgames
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Ближайшие матчи"
                games={
                  this.props.tournaments && this.props.tournaments.stadiums
                    ? this.props.tournaments.stadiums.begingames
                    : []
                }
              />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(
  mapStateToProps,
  { getTourStadiums }
)(TournamentsStadiums);
