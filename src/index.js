import React from "react";
import ReactDOM from "react-dom";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import uk from "react-intl/locale-data/uk";
import ru from "react-intl/locale-data/ru";

import { flattenMessages } from "./utils";
import "./index.css";
import App from "./App";

import messages from "./messages";
import registerServiceWorker from "./registerServiceWorker";

addLocaleData([...en, ...uk, ...ru]);

let locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "en-US";

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
