import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import uk from "react-intl/locale-data/uk";
import ru from "react-intl/locale-data/ru";

import { flattenMessages } from "./utils";
import "./index.css";
import App from "./App";

import messages from "./messages";
import ConnectedIntlProvider from "./components/common/ConnectedIntlProvider";
import registerServiceWorker from "./registerServiceWorker";

addLocaleData([...en, ...uk, ...ru]);

// let locale =
//   (navigator.languages && navigator.languages[0]) ||
//   navigator.language ||
//   navigator.userLanguage ||
//   "en-US";

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedIntlProvider
    // locale={this.props.lang.local}
    // messages={flattenMessages(messages[this.props.lang.local])}
    > */}
    <App />
    {/* </ConnectedIntlProvider> */}
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
