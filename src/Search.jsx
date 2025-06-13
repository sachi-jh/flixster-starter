

const Search = ({searchMovie, searchQuery, handleSearchChange, clearSearch}) => {

  return (
    <>
      <form onSubmit={searchMovie}>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search"/>
        <button type="submit">Search</button>
        <button type="button" onClick={clearSearch}>Clear</button>
      </form>
    </>
  );
};

export default Search;
