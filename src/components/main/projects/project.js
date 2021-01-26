import React from "react";
import Project from "./project/project";
import Header from "../../common/header/header";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      projects: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          projects: result,
        });
      });
  }
  render() {
    const { error, isLoaded, projects } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="projects container">
          <Header value="Latest Projects" />
          {projects.map((item, index) => (
            <Project
              key={item.id + item.title}
              value={item}
              isFirstProject={index === 0 ? true : false}
            />
          ))}
        </div>
      );
    }
  }
}

export default Projects;
