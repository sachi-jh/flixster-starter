import { useState, useEffect } from "react";
import { fetchDataHelper, parseMovieData } from "./utils/utils";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]); 
  let searchEntered

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

  return (
    <>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search"/>
      <button onClick={searchMovie}>Search</button>
      <button onClick={clearMovie}>Clear</button>
    </>
  );
};

export default Search;
