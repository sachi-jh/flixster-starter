import { useEffect, useState } from "react";
import { parseMovieData, fetchDataHelper, sortAlphabetic, sortReleaseDate, sortByRating } from "./utils/utils.js";
import "./Home.css";
import Navbar from "./Navbar.jsx"
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import Select from "./Select.jsx";

const Home = ({isLikedArr, isWatchedArr, setIsLikedArr, setIsWatchedArr}) => {
  const [data, setData] = useState([]); //stores the dataset that gets displayed on the main page
  const [searchQuery, setSearchQuery] = useState(""); //stores the value inputed in the search field
  const [sortVal, setSortVal] = useState('default');  // stores the value selected in the sort options dropdown
  const [pageCount, setPageCount] = useState(1);  //stores the number of times load more is pressed
  let searchEntered;  //used to capture search queary on submit
  const urlLoad = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageCount}&sort_by=popularity.desc`

  //when load more button is clicked, increment
  const loadMoreButtonClick = () => {
      setPageCount(pageCount +1);
  }

  //display whaterver is entered into the search bar results
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const searchMovie = async (event) =>{
    event.preventDefault();
    searchEntered = searchQuery;
    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchEntered}&include_adult=false&language=en-US&page=1`;
    setData((parseMovieData(await fetchDataHelper(urlSearch))));
  }

  //reset page to the first page from api
  const clearSearch = async() => {
    setPageCount(1);
    setSearchQuery('');
    setData(parseMovieData(await fetchDataHelper(urlLoad)));
  }

  //checks the value of the select tag to determine which sort to implement
  const selectSortValue = async(val) => {
    setSortVal(val);
    let sortedData = [...data];
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
    
  }, [pageCount]);

  return (
    <div className="Home">
      <header>
        <Navbar/>
        <h1>Flixster Movies</h1>
        <div className="header-components">
          <Search searchMovie={searchMovie} searchQuery={searchQuery} handleSearchChange={handleSearchChange} clearSearch={clearSearch}/>
          <Select selectSortValue={selectSortValue} sortVal={sortVal}/>
        </div>
      </header>
      <main>
        <MovieList data={data} isLikedArr={isLikedArr} setIsLikedArr={setIsLikedArr} isWatchedArr={isWatchedArr} setIsWatchedArr={setIsWatchedArr} loadMoreButtonClick={loadMoreButtonClick}/>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
