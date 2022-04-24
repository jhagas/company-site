import React from "react";

function Projects({ projects }) {
  return (
    <div className="sm:px-24 px-12 py-16">
      <h1 className="font-work font-bold text-4xl text-black">
        Projects
      </h1>
      {projects.map((item, index) => (
        <p key={index}>{item.attributes.title}</p>
      ))}
    </div>
  );
}

export default Projects;
