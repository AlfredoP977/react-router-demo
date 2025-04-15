import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Emoji Critic — All About Emojis</h1>
      <Link to="/reviews">
        The #1 Destination for Emoji Reviews on the World Wide Web Since 2020!
      </Link>
    </div>
  );
}

export default Dashboard;
