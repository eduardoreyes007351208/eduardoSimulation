import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the public/data/pages.json file
    fetch("/data/pages.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <h1 className="welcomeText">Welcome to Eduardo's Simulation</h1>
      <div className="lineSpacer"></div>
      <h2 className="welcomeText">Projects</h2>
      <div className="pagesContainer">
        {data.map((page, index) => (
          <div
            className="pagesCard"
            onClick={() => handleCardClick(page.id)}
            key={page.id}
          >
            <h3>{page.projectName}</h3>
            <img className="image" src={page.thumbnail} alt="thumbnail" />
            <div>
              <p>{page.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
