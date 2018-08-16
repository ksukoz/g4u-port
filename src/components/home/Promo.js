import React from "react";
import promo_bg from "./img/promo_bg.png";

const Promo = () => {
  return (
    <section
      className="section-promo"
      style={{ background: `url(${promo_bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col m9">
            <h1>Комфортная игра на лучших полях вашего города</h1>
            <p>
              Футбольный турнир G4U (Game for You) это бескомпромисное качество
              игры с лучшими игроками Украины и внушительным призовым фондом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
