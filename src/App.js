import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={()=> }/>
        <Route exact path="/palette:id" render={()=> }/>
        {/* <div className="App"> */}
          {/* Passed individually using spread operator */}
          {/* <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Switch>
    );
  }
}

export default App;
