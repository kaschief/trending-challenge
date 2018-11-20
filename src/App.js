import React, { Component } from "react";
import Search from "./components/Search";
import Grid from "./components/Grid";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  inputHandle = event => {
    let newTerm = event.target.value;
    console.log(newTerm);
    this.setState({
      searchTerm: newTerm
    });
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub Trending Repositories</h1>
        <Search
          search={this.state.searchTerm}
          change={e => this.inputHandle(e)}
        />
        <Grid />
      </div>
    );
  }
}

export default App;
