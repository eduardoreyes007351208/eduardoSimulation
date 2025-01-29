import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [pLength, setPLenght] = useState(null);
  var test = `p.${pLength}`;

  useEffect(() => {
    fetch("/data/pages.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const selectedProject = jsonData.find((p) => p.id === id);
        setProject(selectedProject);
        setPLenght(project.paragraphs.length);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  if (!project) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="projectPage">
        <h1>{project.projectName}</h1>
        <a href="/">
          <button className="button">Home</button>
        </a>
        <div className="paragraphContainers">
          <p>{project.p1}</p>
        </div>
        <div className="paragraphContainers">
          <p>{project.p2}</p>
        </div>
        {project.paragraphs.map((p, id) => (
          <div key={id} className="paragraphs">
            {Object.keys(p).map((key) => {
              let className;

              if (key.startsWith("date")) {
                className = "date";
              } else if (key.startsWith("p")) {
                className = "paratext";
              } else {
                className = "heading";
              }
              return (
                <div className="textbox">
                  <p key={key} className={className}>{p[key]}</p>
                </div>
              );
            })}
            <div>
              {project.images[id]?.map((imgSrc, imgIndex) => (
                <img
                  className="images"
                  key={imgIndex}
                  src={imgSrc}
                  alt={`Image ${id + 1}-${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
