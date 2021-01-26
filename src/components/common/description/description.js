import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './description.scss';

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <FontAwesomeIcon className='description__icon' icon={this.props.value.icon} />
        <span className='description__text'>{this.props.value.text}</span>
      </div>
    );
  }
}

export default Description;
