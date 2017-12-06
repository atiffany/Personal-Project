import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";

const styles = {
  margin: 0,
  fontFamily: "Georgia"
};

const App = () => (
  <div style={styles}>
    <Navigation />
    <Section />
  </div>
);

export default App;
