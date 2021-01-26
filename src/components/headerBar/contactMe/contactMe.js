import React from "react";
import Button from "../../common/button/button";

class ContactMe extends React.Component {
  render() {
    return (
    <div className="contactMe">
      <Button className='Button' value={{ icon: 'paper-plane', text: 'Contact Me', backgroundColor: '#57B952' }} />
    </div>
    );
  }
}

export default ContactMe;
