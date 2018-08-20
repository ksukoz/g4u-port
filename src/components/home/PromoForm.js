import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Row, Input } from "react-materialize";
import { sendPromo } from "../../actions/commonActions";

class PromoForm extends Component {
  state = {
    city: 0,
    how__know: "",
    answer: "",
    name: "",
    tel: "",
    age: "",
    number: "",
    [this.props.name]: ""
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onHowChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onClickHandler = e => {
    e.preventDefault();

    let answer;

    this.setState({
      ...this.state,
      [e.target.name]: e.target.innerText
    });

    answer = {
      city: this.state.city,
      how__know: this.state.how__know,
      answer: this.state.answer,
      name: this.state.name,
      tel: this.state.tel,
      age: this.state.age,
      number: this.state.number,
      [this.props.name]: e.target.innerText
    };

    this.props.sendPromo(answer);
  };

  render() {
    return (
      <form className="tab-content">
        <Row className="">
          <Input
            s={12}
            type="select"
            name="city"
            defaultValue={this.state.city}
            onChange={this.onChangeHandler}
          >
            <option value={0} disabled>
              Выбрать город
            </option>
            <option value="Киев">Киев</option>
            <option value="Сумы">Сумы</option>
            <option value="Ирпень">Ирпень</option>
          </Input>
        </Row>
        {this.props.name !== "open_league" ? (
          <div>
            <h6>Откуда узнали о MyGame4U?</h6>
            <Row>
              <p>
                <label>
                  <input
                    name="how__know"
                    type="radio"
                    value="vk"
                    onChange={this.onHowChangeHandler}
                  />
                  <span>Vkontakte</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="how__know"
                    type="radio"
                    value="fb"
                    onChange={this.onHowChangeHandler}
                  />
                  <span>Facebook</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="how__know"
                    type="radio"
                    value="inst"
                    onChange={this.onHowChangeHandler}
                  />
                  <span>Instagram</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="how__know"
                    type="radio"
                    value="friends"
                    onChange={this.onHowChangeHandler}
                  />
                  <span>Друзья</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="how__know"
                    type="radio"
                    value="other"
                    onChange={this.onHowChangeHandler}
                  />
                  <span>Другое</span>
                </label>
              </p>
            </Row>
            <h6>Когда-нибудь играли до этого?</h6>
            <Row>
              <Input
                s={12}
                name="answer"
                label="Ваш ответ"
                value={this.state.answer}
                onChange={this.onChangeHandler}
              />
            </Row>
          </div>
        ) : (
          ""
        )}
        <Row>
          <Input
            s={12}
            name="name"
            label="Ваше имя"
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
        </Row>
        <Row>
          <Input
            s={12}
            name="tel"
            label="Номер телефона"
            value={this.state.tel}
            onChange={this.onChangeHandler}
          />
        </Row>
        {this.props.name !== "create_command" ? (
          <Row>
            <Input
              s={12}
              name="age"
              label="Возраст"
              type="number"
              value={this.state.age}
              onChange={this.onChangeHandler}
            />
          </Row>
        ) : (
          ""
        )}
        {this.props.name === "find_command" ? (
          <Row>
            <Input
              s={12}
              name="number"
              label="Позиция на поле"
              type="number"
              value={this.state.number}
              onChange={this.onChangeHandler}
            />
          </Row>
        ) : (
          ""
        )}
        {this.props.name === "open_league" ? (
          <Row>
            <h6>Наличие огранизаторского опыта</h6>
            <Input
              s={12}
              name="answer"
              label="Ваш ответ"
              value={this.state.answer}
              onChange={this.onChangeHandler}
            />
          </Row>
        ) : (
          ""
        )}
        <Button
          className="btn btn--large"
          type="submit"
          waves="light"
          name={this.props.name}
          onClick={this.onClickHandler}
        >
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

export default connect(
  null,
  { sendPromo }
)(PromoForm);
