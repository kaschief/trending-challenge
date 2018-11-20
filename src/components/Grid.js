import React, { Component } from "react";
import {
  Card,
  Table,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle
} from "reactstrap";

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <a href={this.props.url} target="_blank">
              <CardTitle>{this.props.description}</CardTitle>
            </a>
            <CardSubtitle>
              Built By: {this.props.author} {"    "} Language:{" "}
              {this.props.language}
            </CardSubtitle>
            <CardText>
              Stars: {this.props.stars}
              {"    "}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
