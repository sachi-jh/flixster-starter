import Navbar from "./Navbar";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const Liked = ({isLikedArr, setIsLikedArr, isWatchedArr, setIsWatchedArr}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(isLikedArr)
  }, []);

    return (
    <div className="Home">
      <header>
        <div className="title-and-menu">
            <Navbar/>
            <h1>Liked Movies</h1>
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
export default Liked