import React from "react";
import Title from "../../../common/title/title";
import Paragraph from "../../../common/paragraph/paragraph";

import './project.scss';
import Subtitle from "../../../common/subtitle/subtitle";
import './project.scss';
class Project extends React.Component {
  render() {
    return(
      <div className="project">
        { this.props.isFirstProject ? 
          (
            <div className='project main'>
                <Title title={this.props.value.title} />
                {
                  (this.props.isFirstProject ? <Subtitle value={this.props.value.subtitle} /> : null)
                }
                <span className='project__image'>
                  <img src={`${process.env.PUBLIC_URL}/img/${this.props.value.picture}`} />
                </span>
                <Paragraph value={this.props.value.description} />
            </div>
          ):
          (
            <div className='project item'>
                
                <span className='project__image'>
                  <img src={`${process.env.PUBLIC_URL}/img/${this.props.value.picture}`} />
                </span>
                <div className='project__holder'>
                    <Title title={this.props.value.title} />
                    <Paragraph value={this.props.value.description} />
                </div>                
            </div>
          )
        }        
      </div>  
    );
  }
}

export default Project;
