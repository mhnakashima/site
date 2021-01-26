import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className="button" style={{backgroundColor: this.props.value.backgroundColor}}>
        <span className='button__holder'>
          <FontAwesomeIcon icon={this.props.value.icon} />
          <span className='button__text'>{this.props.value.text}</span>
        </span>
      </button>
    );
  }
}

export default Button;
