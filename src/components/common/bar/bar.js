import React from "react";
import Title from "../title/title";

import './bar.scss';

class Bar extends React.Component {
  render() {
    return (
      <div className="bar">
          <div className="bar__description">
            <Title className='bar__name' title={this.props.value.name} />
            <span  className='bar__level'>{this.props.value.level}</span>
          </div>
          <div className='bar__container'>
              <div className='bar__value' style={{ "width": (this.props.value.score + '%') }}></div>
              <div className='bar__shadow'></div>
          </div>
      </div>
    );
  }
}

export default Bar;
