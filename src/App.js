import React, { Component } from "react";
import Search from "./components/Search";
import Grid from "./components/Grid";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      repositories: []
    };
  }

  componentDidMount() {
    axios.get(`https://github-trending-api.now.sh/repositories?`).then(res => {
      this.setState({
        repositories: res.data
      });
    });
  }

  inputHandle = event => {
    let newTerm = event.target.value;
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

        {this.state.searchTerm.length === 0 &&
          this.state.repositories.map((r, i) => {
            return (
              <Grid
                key={i}
                description={r.description}
                author={r.author}
                language={r.language}
                url={r.url}
                stars={r.stars}
              />
            );
          })}
        {this.state.searchTerm.length !== 0 &&
          this.state.repositories
            .filter(r => {
              return r.description
                .toLowerCase()
                .includes(this.state.searchTerm);
            })
            .map((r, i) => {
              return (
                <Grid
                  key={i}
                  description={r.description}
                  author={r.author}
                  language={r.language}
                  url={r.url}
                  stars={r.stars}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
