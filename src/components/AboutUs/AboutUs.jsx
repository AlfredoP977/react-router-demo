import "./AboutUs.css";
import "./AboutContent.css";
import { Link, Outlet } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul>
        <li>
          <Link to="SiteHistory">Site History</Link>
        </li>
        <li>
          <Link to="SiteMission">Site Mission</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
