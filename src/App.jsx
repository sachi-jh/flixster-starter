import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Watched from "./Watched"
import { useState } from "react";
import Liked from "./Liked";

export default function App() {
  const [isLikedArr, setIsLikedArr] = useState([]);
  const [isWatchedArr, setIsWatchedArr] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLikedArr={isLikedArr} isWatchedArr={isWatchedArr} setIsLikedArr={setIsLikedArr} setIsWatchedArr={setIsWatchedArr} />}/>
        <Route path="/watched" element={<Watched isLikedArr={isLikedArr} isWatchedArr={isWatchedArr} setIsLikedArr={setIsLikedArr} setIsWatchedArr={setIsWatchedArr}/>}/>
        <Route path="/liked" element={<Liked isLikedArr={isLikedArr} isWatchedArr={isWatchedArr} setIsLikedArr={setIsLikedArr} setIsWatchedArr={setIsWatchedArr}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);