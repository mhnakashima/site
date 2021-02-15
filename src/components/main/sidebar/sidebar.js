import React from "react";
import Header from "../../common/header/header";
import Paragraph from "../../common/paragraph/paragraph";
import Bar from "../../common/bar/bar";
import Skills from "./skills/skills";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar container">
        <Header value='Skills' />
      </div>
    );
  }
}

export default Sidebar;
