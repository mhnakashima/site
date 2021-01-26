import React from "react";

import './title.scss';

class Title extends React.Component {
  render() {
    return (
      <span className="title">
          {this.props.title}
      </span>
    );
  }
}

export default Title;
