import React from "react";
import { FormattedMessage } from "react-intl";
import { Modal, Button, Tabs, Tab, Row, Input } from "react-materialize";
import promo_bg from "./img/promo_bg.png";
import PromoForm from "./PromoForm";

const Promo = () => {
  return (
    <section
      className="section-main-promo"
      style={{ background: `url(${promo_bg})`, backgroundSize: "cover" }}
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
            <Modal
              className="modal modal--promo"
              // header="Modal Header"
              trigger={
                <Button className="btn btn--large">Оставить заявку</Button>
              }
            >
              <Tabs className="tab tab--promo z-depth-1">
                <Tab title="Найти команду" active>
                  <PromoForm name="find_command" />
                </Tab>
                <Tab title="Заявить команду">
                  <PromoForm name="create_command" />
                </Tab>
                <Tab title="Открыть лигу">
                  <PromoForm name="open_league" />
                </Tab>
              </Tabs>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
