import React from "react";

import "./ProjectCard.css";

class ProjectLinks extends React.PureComponent {
  render() {
    const { view_source, in_progress } = this.props.links;
    return (
      <div className="project-links">
        <a
          href={view_source}
          rel="noopener"
          target="_blank"
          className="project-link"
        >
          <a className="button">VIEW SOURCE</a>
        </a>
      </div>
    );
  }
}

class ProjectSkill extends React.PureComponent {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectSkills extends React.PureComponent {
  render() {
    return (
      <div className="project-skills tc">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectCardDivs extends React.PureComponent {
  render() {
    const { image, title, description, skills, links } = this.props;

    return (
      <div className="projectcarddivs tc bg-light-red dib br4 pa4 ma4 bw2 shadow-3">
        <img className="projectcarddivs-image" src={image} />
        <div className="projectcarddivs-background" />
        <div className="projectcarddivs-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
          <ProjectLinks links={links} />
        </div>
      </div>
    );
  }
}

class ProjectCard extends React.PureComponent {
  render() {
    const { projectcard } = this.props;
    return (
      <div className="projectcard-container ">
        {projectcard &&
          projectcard.map((_project) => {
            return (
              <ProjectCardDivs
                title={_project.title}
                description={_project.description}
                skills={_project.skills}
                links={_project.links}
                image={_project.image}
                key={_project.title}
              />
            );
          })}
      </div>
    );
  }
}

export default ProjectCard;
