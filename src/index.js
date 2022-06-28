import React from "react";
import App from "./App";
import "./index.css";
import "./assests/font-awesome/css/all.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BaseProvider, LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
