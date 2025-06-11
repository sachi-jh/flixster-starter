import { useState } from "react"
import MovieCard from "./MovieCard"
import './MovieList.css'


//component that renders the whole grid of cards with movie details
//<button onClick={loadMoreButtonClick}>Load More</button>
function MovieList ({data}){
    
    return(
        <>
        <div>
            <div className="card-list">
                {data.map(movie =>(
                    <div className="" key={movie}>
                        <MovieCard name={movie.title} img={movie.image} rating={movie.rating}/>
                </div>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default MovieList