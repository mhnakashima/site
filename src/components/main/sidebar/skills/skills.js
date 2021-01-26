import React from "react";
import Bar from "../../../common/bar/bar";

import './skills.scss';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "1", name: "Python & Django", level: "Expert", score: 90 },
        { id: "2", name: "Javascript & Jquery", level: "Expert", score: 90 },
        { id: "3", name: "HTML & Django", level: "Expert", score: 90 },
        { id: "4", name: "Ruby on Rails", level: "Pro", score: 80 }
      ],
    };
  }

  render() {
    return (
      <div className="skills">
        { this.state.skills.map((item) => {
            return <Bar key={item.id} value={item} />
          }
        )}
      </div>
    );
  }
}

export default Skills;
