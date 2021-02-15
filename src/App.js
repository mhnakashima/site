import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.scss";
import About from "./components/main/about/about";
import Projects from "./components/main/projects/project";
import Contact from "./components/main/sidebar/contact/contact";
import Sidebar from "./components/main/sidebar/sidebar";
import HeaderBar from "./components/headerBar/headerBar";
import Pic from "./components/headerBar/pic/pic";
import Info from "./components/headerBar/info/info";
import ContactMe from "./components/headerBar/contactMe/contactMe";

library.add(fas, fab);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="sidebar">
            <div className="information">
              <Pic className="pic" />
              <Info className="info" />
            </div>
            <Contact />
          </div>

          <div className="main">
            <div className="headerContainer">
              <HeaderBar />
            </div>
            <About />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
