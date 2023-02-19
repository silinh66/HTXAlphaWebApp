import React, { Component } from "react";
import { Button } from "antd";

export default class ButtonCustom extends Component {
  render() {
    const { onClick, style, text } = this.props;
    return (
      <Button onClick={onClick} style={style}>
        {text}
      </Button>
    );
  }
}
