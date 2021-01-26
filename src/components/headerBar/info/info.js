import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlus,
  faYoutube,
  faReddit,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../../common/header/header";
import Title from "../../common/title/title";

import "./info.scss";

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "James Lee",
      title: "Web App Developer",
    };
  }
  render() {
    return (
      <div className="info">
        <Header value={this.state.name} />
        <Title title={this.state.title} />

        <nav className="social">
          <ul className="social__list">
            <li className="social__list__item">
              <a href="#" className="social__list__link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social__list__item">
              <a href="#" className="social__list__link">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
            </li>
            <li className="social__list__item">
              <a href="#" className="social__list__link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li className="social__list__item">
              <a href="#" className="social__list__link">
                <FontAwesomeIcon icon={faReddit} />
              </a>
            </li>

            <li className="social__list__item">
              <a href="#" className="social__list__link">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Info;
