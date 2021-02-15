import React from "react";
import "./pic.scss";

class Pic extends React.Component {
  render() {
    return (
      <div
        className="pic"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/profile.png"})`
        }}>
      </div>
    );
  }
}

export default Pic;
