import React from "react";
import "./headerBar.scss";
class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <span className="headerBar__status">
          Available for freelas <span className="status available"></span>
          <ul className="languages">
            <li>
              <button className="languages__button">PT</button>
            </li>
            <li>
              <button className="languages__button">ES</button>
            </li>
            <li>
              <button className="languages__button">EN</button>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default HeaderBar;
