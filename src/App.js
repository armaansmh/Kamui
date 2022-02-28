import React from "react";
import Header from "./Components/Header";
import Roadmap from "./Components/Roadmap";
import FAQs from "./Components/FAQs";
import Copyright from "./Components/Copyright";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Roadmap />
      <FAQs />
      <Copyright />
    </div>
  );
}

export default App;
