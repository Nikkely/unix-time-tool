import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@material-ui/core";

import { UnixTimeForm } from "./components/UnixTimeForm";
import {Header} from "./components/Header"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <header>
      <Header></Header>
    </header>

    <main>
      <UnixTimeForm />
    </main>
  </React.StrictMode>
);

// https://bit.ly/CRA-vitals
reportWebVitals(console.log);
