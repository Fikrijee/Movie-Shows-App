import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; 
const Home = () => {
  return (
    <div className="app-container"  style={{
      padding: "85px 30px",
      fontSize: "1.2rem",
      
    }}>
      <h1 className="heading">Welcome to the Main App</h1>
      <p className="description">
        Explore the collection of movies and shows. Click the buttons below to
        navigate to your preferred experience.
      </p>
      <div className="button-container">
      <Link to="/movie"> 
  <button className="button">Go to the Movies App</button>
</Link>
<Link to="/tv"> 
  <button className="button">Go to the Shows App</button>
</Link>

      </div>
    </div>
  );
};

export default Home;
