import React, { Component } from "react";
import { Input } from "reactstrap";

export default class Search extends Component {
  render() {
    return (
      <div>
        <Input
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
