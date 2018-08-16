import React, { Component } from "react";
import stats_bg from "./img/stats_bg.png";

class Stats extends Component {
  render() {
    return (
      <div style={{ background: `url(${stats_bg})` }}>
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <h3>Аматорская футбольная лига MyGame4U</h3>
              <p>
                MyGame4U - це 2,5 роки досвіду в організації матчів та турнірів.
                За цей час було враховано і вирішено величезну кількість нюансів
                і помилок. Тепер ми з упевненістю можемо сказати, що робимо
                максимально круті турніри в Україні.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
