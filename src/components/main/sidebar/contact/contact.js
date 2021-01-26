import React from "react";
import Description from "../../../common/description/description";

import './contact.scss';
class Contact extends React.Component {
  render() {
    return (
      <div className="contact container">
        <Description className='contact__description' value={{icon: 'map-marker', text: 'San Francisco, USA'}} />
        <Description className='contact__description' value={{icon: 'envelope', text: 'jameslee@website.com'}} />
        <Description className='contact__description' value={{icon: 'link', text: 'http://www.website.com'}} />
      </div>
    );
  }
}

export default Contact;
