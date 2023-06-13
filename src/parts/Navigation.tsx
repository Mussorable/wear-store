import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { default as Logo } from "../assets/logo.svg";
import { RootState } from "../redux-components/store.js";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="Logo" height="60" width="60" />
        </Link>
        <div className="navigation-container">
          <Link to="shop">SHOP</Link>
          {user ? (
            <span onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link to="signin">SIGN IN</Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
