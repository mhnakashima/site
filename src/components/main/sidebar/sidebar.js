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
        <Paragraph value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum lacus ante, eu varius nisl volutpat eu. Maecenas orci sem, blandit eu elementum ullamcorper, viverra sed tortor. Nam quis lacinia libero. Praesent tristique sollicitudin erat, non bibendum magna lacinia et. Duis egestas facilisis vehicula. Cras aliquet porttitor dolor quis luctus. Cras lacinia rutrum ex nec tempor. Aenean malesuada elementum lacus, vitae ullamcorper risus scelerisque at. Quisque ornare libero ut lobortis hendrerit. Suspendisse potenti. Donec ligula urna, dapibus quis nibh eu, commodo pulvinar eros.' />
        <Skills />
        
        <a className='link' href='#'>More on Coderwall</a>
      </div>
    );
  }
}

export default Sidebar;
