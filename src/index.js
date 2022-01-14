import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import FunFact from "./components/FunFact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/Main";

import logo from "./logo.svg";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <>
      {/* <FunFact /> */}
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default Page;
