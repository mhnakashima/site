import React from "react";
import Description from "../../../common/description/description";
import Pic from "../../../headerBar/pic/pic";

import './contact.scss';
class Contact extends React.Component {
  render() {
    return (
      <div className="contact container">
        <Description className='contact__description' value={{text: 'sobre'}} />
        <Description className='contact__description' value={{text: 'experiências'}} />
        <Description className='contact__description' value={{text: 'formação'}} />
        <Description className='contact__description' value={{text: 'cursos'}} />
      </div>
    );
  }
}

export default Contact;
