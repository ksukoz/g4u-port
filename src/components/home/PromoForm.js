import React, { Component } from "react";
import { Button, Row, Input } from "react-materialize";

class PromoForm extends Component {
  state = {
    city: ""
  };
  onCityChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form className="tab-content">
        <Row className="">
          <Input
            s={12}
            type="select"
            name="city"
            defaultValue={0}
            onChange={this.onCityChangeHandler}
          >
            <option value={0} disabled>
              Выбрать город
            </option>
            <option value={1}>Киев</option>
            <option value={2}>Сумы</option>
            <option value={2}>Ирпень</option>
          </Input>
        </Row>
        {this.props.name !== "open_league" ? (
          <div>
            <h6>Откуда узнали о MyGame4U?</h6>
            <Row>
              <Input
                s={12}
                name="how__know"
                type="checkbox"
                value="vk"
                label="Vkontakte"
              />
              <Input
                s={12}
                name="how__know"
                type="checkbox"
                value="fb"
                label="Facebook"
              />
              <Input
                s={12}
                name="how__know"
                type="checkbox"
                value="inst"
                label="Instagram"
              />
              <Input
                s={12}
                name="how__know"
                type="checkbox"
                value="friends"
                label="Друзья"
              />
              <Input
                s={12}
                name="how__know"
                type="checkbox"
                value="other"
                label="Другое"
              />
            </Row>
            <h6>Когда-нибудь играли до этого?</h6>
            <Row>
              <Input s={12} label="Ваш ответ" />
            </Row>
          </div>
        ) : (
          ""
        )}
        <Row>
          <Input s={12} label="Ваше имя" />
        </Row>
        <Row>
          <Input s={12} label="Номер телефона" />
        </Row>
        {this.props.name !== "create_command" ? (
          <Row>
            <Input s={12} label="Возраст" type="number" />
          </Row>
        ) : (
          ""
        )}
        {this.props.name === "find_command" ? (
          <Row>
            <Input s={12} label="Позиция на поле" type="number" />
          </Row>
        ) : (
          ""
        )}
        {this.props.name === "open_league" ? (
          <Row>
            <h6>Наличие огранизаторского опыта</h6>
            <Input s={12} label="Ваш ответ" />
          </Row>
        ) : (
          ""
        )}
        <Button className="btn btn--large" type="submit" waves="light">
          {this.props.name === "find_command"
            ? "Найти команду"
            : this.props.name === "create_command"
              ? "Заявить команду"
              : "Открыть лигу"}
        </Button>
      </form>
    );
  }
}

export default PromoForm;
