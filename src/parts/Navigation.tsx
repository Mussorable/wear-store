import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { default as Logo } from "../assets/logo.svg";
import { RootState } from "../redux-components/store.js";
import { signOutUser } from "../utils/firebase/firebase.utils.js";
import ErrorHandler from "../utils/error-handler/errorHandler.js";
import { FirebaseError } from "firebase/app";
import { setUser } from "../redux-components/userSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const handleSignOutClick = async () => {
    const signOut = async () => {
      await signOutUser();
    };

    try {
      signOut();
      dispatch(setUser(null));
    } catch (error) {
      const { code } = error as FirebaseError;
      ErrorHandler(code);
    }
  };

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
            <span onClick={handleSignOutClick}>SIGN OUT</span>
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
