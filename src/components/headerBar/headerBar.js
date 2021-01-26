import React from "react";
import Pic from "./pic/pic";
import Info from "./info/info";
import ContactMe from "./contactMe/contactMe";

import './headerBar.scss';

class HeaderBar extends React.Component {
  render() {
    return (
    <div className="headerBar">
      <Pic className='pic' />
      <Info className='info' />
      <ContactMe className='contactMe' />
    </div>
    );
  }
}

export default HeaderBar;
