import React, {useEffect, useState} from 'react'
import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);

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

  return (
    <>
        <h1 className='welcome'>Welcome to Eduardo's Simulation</h1>
        <div className='lineSpacer'></div>
        <a href="/project">Project</a>
        <div className='pagesContainer'>
            {data.map((page, index) => (
                <a href='/project' key={index}>
                    <div className='pagesCard'>
                        <h2>{page.projectName}</h2>
                        <div>
                            <p>{page.p1}</p>
                        </div>
                        <div>
                            <p>{page.p2}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
        
    </>
  )
}

export default Home