import React, { Component } from "react";

export default class Search extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search Trending Repos"
          value={this.props.search}
          onChange={this.props.change}
        />
      </div>
    );
  }
}
