import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";

import { MainForm } from "./components/MainForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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

    <footer>
      <Footer />
    </footer>
  </>
);

// https://bit.ly/CRA-vitals
reportWebVitals(console.log);
