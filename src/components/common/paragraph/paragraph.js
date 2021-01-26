import React from "react";
import "./paragraph.scss";

class Paragraph extends React.Component {
  render() {
    return (
      <div className="paragraph">
        {this.props.value}
      </div>
    );
  }
}

export default Paragraph;
