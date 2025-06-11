import { useEffect, useState } from "react";
import { parseMovieData, fetchDataHelper } from "./utils/utils";
import "./App.css";
import MovieList from "./MovieList";
import Search from "./Search.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1)
  const [searchQuery, setSearchQuery] = useState("");
  let searchEntered



  const loadMoreButtonClick = () => {
      setPageCount(pageCount +1)
      console.log(pageCount)      
  }
  const urlLoad = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageCount}&sort_by=popularity.desc`

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovie = async () =>{
    searchEntered = searchQuery
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchEntered}&include_adult=false&language=en-US&page=1`;
    //const setFetchedData = async () => {
    setData((parseMovieData(await fetchDataHelper(url))));
    //};
    //setFetchedData();
  }

  const clearSearch = async() => {
    setPageCount(1)
    setData(parseMovieData(await fetchDataHelper(urlLoad)))
  }
  //fetch data pages and format using parseMovieData which boils it down to Title, Image, Rating
  useEffect(() => {
    const setFetchedData = async() => {
      setData([...data, ...parseMovieData(await fetchDataHelper(urlLoad))]);
    }
    setFetchedData()
    
  }, [pageCount]);

  return (
    <div className="App">
      <header>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search"/>
        <button onClick={searchMovie}>Search</button>
        <button onClick={clearSearch}>Clear</button>
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
