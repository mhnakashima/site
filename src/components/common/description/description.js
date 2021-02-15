import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./description.scss";

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <a
          href={"#" + this.props.value.text}
          className="description__link"
          id={this.props.value.text}
        >
          {this.props.value.text}/
        </a>
      </div>
    );
  }
}

export default Description;
