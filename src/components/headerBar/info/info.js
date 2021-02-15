import React from "react";
import Header from "../../common/header/header";
import Title from "../../common/title/title";
import "./info.scss";


class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "mhnakashima@gmail.com",
      title: "Front-End Engineer",
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
                Linkedin
              </a>
            </li>
            <li className="social__list__item">
              <a href="#" className="social__list__link">
                Github
              </a>
            </li>
            <li className="social__list__item">
              <a href="#" className="social__list__link">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Info;
