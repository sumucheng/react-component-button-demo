import React from "react";
import "./App.css";
import Button from "./components/button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button value="click" onClick={this.x.bind(this)} />
        <Button value="click" />
        <Button value="click" />
      </div>
    );
  }
  x(string) {
    console.log(string);
  }
}

export default App;
