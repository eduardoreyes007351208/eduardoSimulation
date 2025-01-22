import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import "./Project.css"

const Project = () => {
  const {id} = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data/pages.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("Fetched Data:", jsonData); // Log all data
        const selectedProject = jsonData.find((p) => p.id === id);
        console.log("Selected Project:", selectedProject); // Log the selected project
        setProject(selectedProject);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);
  

  if (!project) {
    return <div>Loading ...</div>
  }

  return (
    <>
        <div className='projectPage'>
            <h1>{project.projectName}</h1>
            <a href="/">Home</a>
            <div className='paragraphContainers'>
              <p>{project.p1}</p>
            </div>
            <div className='paragraphContainers'>
              <p>{project.p2}</p>
            </div>
        </div>
    </>
    

  )
}

export default Project