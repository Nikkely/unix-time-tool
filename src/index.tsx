import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";

import { MainForm } from "./components/MainForm";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CssBaseline />
    <header>
      <Header></Header>
    </header>

    <main>
      <MainForm />
    </main>
  </>
);

// https://bit.ly/CRA-vitals
reportWebVitals(console.log);
