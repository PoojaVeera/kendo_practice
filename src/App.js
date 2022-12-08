import React from "react";
import "./App.scss";
import { Body } from "./components/Body";
// import { Header } from "./components/Header";
import { Screen } from "./features/Screen";
import { Screen1 } from "./features/Screen1";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Screen />
      {/* <Screen1 /> */}
      {/* <Body /> */}
    </div>
  );
}

export default App;
