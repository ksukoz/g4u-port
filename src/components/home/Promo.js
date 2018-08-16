import React from "react";
import { FormattedMessage } from "react-intl";
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
            <h1>
              <FormattedMessage id="promo.heading" />
            </h1>
            <p>
              <FormattedMessage id="promo.text" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
