import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { DarkProvider } from "./dark-theme-context";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </StrictMode>,
  rootElement
);
