import React from "react";
import Header from "../../common/header/header";
import Paragraph from "../../common/paragraph/paragraph";
import './about.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about container">
        <Header value='About Me' />
        <Paragraph value='Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Mé faiz elementum girarzis, nisi eros vermeio. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Manduma pindureta quium dia nois paga. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss deixa as pessoas mais interessantis.' />
      </div>
    );
  }
}

export default About;
