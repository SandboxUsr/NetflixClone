import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import TvShows from "./Components/TvShows";
import Latest from "./Components/Latest";
import LandingPage from "./Components/LandingPage"
import MyList from "./Components/MyList"
// import LoginPage from "./Components/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/signin" element={<LoginPage />} /> */}
        </Routes>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<TvShows />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
