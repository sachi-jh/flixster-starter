import Navbar from "./Navbar";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import "./Home.css"

const Watched = ({isLikedArr, setIsLikedArr, isWatchedArr, setIsWatchedArr}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(isWatchedArr)
  }, []);

    return (
    <div className="Home">
      <header>
        <div className="title-and-menu">
          <Navbar/>
          <h1>Watched Movies</h1>
        </div>
      </header>
      <main>
        <MovieList data={data} isLikedArr={isLikedArr} setIsLikedArr={setIsLikedArr} isWatchedArr={isWatchedArr} setIsWatchedArr={setIsWatchedArr}/>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );

}
export default Watched