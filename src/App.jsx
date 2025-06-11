import { useEffect, useState } from "react";
import { parseMovieData } from "./utils/utils";
import "./App.css";
import MovieList from "./MovieList";
import Search from "./Search.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1)

  const loadMoreButtonClick = () => {
      setPageCount(pageCount +1)
      console.log(pageCount)      
  }

  //fetch data pages and format using parseMovieData which boils it down to Title, Image, Rating
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageCount}&sort_by=popularity.desc`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGUxNWE4ZWJkMDY5ZWQzMTE4NWZiMTViM2U3MGQ4NyIsIm5iZiI6MTc0OTUwNjQxNi4zODksInN1YiI6IjY4NDc1OTcwMjQyY2VkMGE5ZTM0MmI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yn3WDx76rA2jgb_7-nhXBNJDv8V-l8lhEIRul_-c76o",
            },
          }
        );
        const dataFetched = await response.json();
        const newData = parseMovieData(dataFetched)
        setData([...data,...newData]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pageCount]);

  return (
    <div className="App">
      <header>
        <Search />
        <h1>Movies</h1>
      </header>
      <main>
        <MovieList data={data} />
        <button onClick={loadMoreButtonClick}>Load More</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
