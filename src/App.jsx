import { useEffect, useState } from "react";
import { parseMovieData, fetchDataHelper, sortAlphabetic, sortReleaseDate, sortByRating } from "./utils/utils";
import "./App.css";
import MovieList from "./MovieList";
import Search from "./Search.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortVal, setSortVal] = useState('default');
  let searchEntered;
  const urlLoad = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageCount}&sort_by=popularity.desc`

  //when load more button is clicked, increment
  const loadMoreButtonClick = () => {
      setPageCount(pageCount +1)
  }

  //display whaterver is entered into the search bar results
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const searchMovie = async () =>{
    searchEntered = searchQuery
    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchEntered}&include_adult=false&language=en-US&page=1`;
    setData((parseMovieData(await fetchDataHelper(urlSearch))));
  }

  //reset page to the first page from api
  const clearSearch = async() => {
    setPageCount(1)
    setSearchQuery('')
    setData(parseMovieData(await fetchDataHelper(urlLoad)))
  }

  //checks the value of the select tag to determine which sort to implement
  const selectSortValue = async(val) => {
    setSortVal(val)
    let sortedData = [...data]
    switch(val){
      case 'alphabetic':
        setData(sortAlphabetic(sortedData));
        break;
      case 'releaseDate':
        setData(sortReleaseDate(sortedData));
        break;
      case 'rating':
        setData(sortByRating(sortedData));
        break;
      default:
        setPageCount(1)
        setData(parseMovieData(await fetchDataHelper(urlLoad)))
    }
  }
  
  useEffect(() => {
    //fetch data pages and format using parseMovieData which boils it down to Title, Image, Rating
    const setFetchedData = async() => {
      setData([...data, ...parseMovieData(await fetchDataHelper(urlLoad))]);
    }
    setFetchedData()
    
  }, [pageCount, ]);

  return (
    <div className="App">
      <header>
        <h1>Flixster Movies</h1>
        <div className="header-components">
          <div>
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search"/>
            <button onClick={searchMovie}>Search</button>
            <button onClick={clearSearch}>Clear</button>
          </div>
          <select id="selectSort" onChange={e => selectSortValue(e.target.value)} value={sortVal}>
            <option value="default">Default</option>
            <option value="alphabetic">Alphabetic (A-Z)</option>
            <option value="releaseDate">Release Date (new-old)</option>
            <option value="rating">Rating (high-low)</option>
          </select>
        </div>
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
