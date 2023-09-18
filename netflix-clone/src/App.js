import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import TvShows from "./Components/TvShows";
import Latest from "./Components/Latest";
import LandingPage from "./Components/LandingPage"
import MyList from "./Components/MyList"
import LoginPage from "./Components/LoginPage"
import HoverableDiv from "./Components/HoverableDiv"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnHoverCard from "./Components/OnHoverCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<TvShows />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/loginpage" element={<LoginPage/>} />
           <Route path="/onhovercard" element={<OnHoverCard/>} /> 
        </Routes>
      </BrowserRouter>
      {/* <HoverableDiv /> */}
      
    </>
  );
}

export default App;
