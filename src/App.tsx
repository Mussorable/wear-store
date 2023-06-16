import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./routes/Shop";
import Home from "./routes/Home";
import Navigation from "./parts/Navigation";
import Auth from "./routes/Auth";
import {
  createUserDocumentAuth,
  getCollectionAndDocuments,
  onUserStateChanged,
} from "./utils/firebase/firebase.utils";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "./redux-components/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./routes/Checkout";
import { RootState } from "./redux-components/store";
import { setListOfProducts } from "./redux-components/categoriesSlice";

function App() {
  const listOfProducts = useSelector(
    (state: RootState) => state.categories.listOfProducts
  );
  const dispatch = useDispatch();
  const api = axios.create({
    baseURL:
      "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const getProducts = async () => {
      const categoryMap = await getCollectionAndDocuments();
      // console.log(categoryMap);
      dispatch(setListOfProducts(categoryMap));
    };

    getProducts();
  }, []);

  useEffect(() => console.log(listOfProducts), [listOfProducts]);

  useEffect(() => {
    onUserStateChanged((user: User | null) => {
      if (user) {
        const serializedUser = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        dispatch(setUser(serializedUser));
        createUserDocumentAuth(user);
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home api={api} />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
