import React from "react";
import ReactDom from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

ReactDom.render(
  <SpeechProvider appId="d03e47b8-d413-4ce9-9988-d7ea6a9544f3" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
