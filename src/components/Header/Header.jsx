import "./Header.css";
import Logo from "../Logo/Logo";

import NavBar from "../Navbar/NavBar";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
