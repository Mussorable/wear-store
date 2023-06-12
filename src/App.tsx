import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./routes/Shop";
import Home from "./routes/Home";
import Navigation from "./parts/Navigation";
import Auth from "./routes/Auth";

function App() {
  const api = axios.create({
    baseURL:
      "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home api={api} />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signIn" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
