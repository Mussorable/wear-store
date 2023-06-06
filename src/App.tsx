import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
