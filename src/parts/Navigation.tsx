import { Link, Outlet } from "react-router-dom";
import { default as Logo } from "../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="Logo" height="60" width="60" />
        </Link>
        <div className="navigation-container">
          <Link to="shop">SHOP</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
