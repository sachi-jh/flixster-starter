import { useState } from "react";

const Search =()=> {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const searchMovie = () => {
        
    }

    return (
        <>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
        <button onClick={searchMovie}>Search</button>
        <button>Clear</button>
        </>
    )
}

export default Search