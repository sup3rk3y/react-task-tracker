import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h4>Version 1.0</h4>
      <p>This is a simple Task Tracker app built using React.</p>
      <div className="return-btn">
        <FaArrowCircleLeft />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default About;
