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
      <h1 className="welcome">Welcome to Eduardo's Simulation</h1>
      <div className="lineSpacer"></div>
      <div className="pagesContainer">
        {data.map((page, index) => (
          <div
            className="pagesCard"
            onClick={() => handleCardClick(page.id)}
            key={page.id}
          >
            <h2>{page.projectName}</h2>
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
