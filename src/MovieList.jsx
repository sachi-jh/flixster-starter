import MovieCard from "./MovieCard"
import './MovieList.css'
//component that renders the whole grid of cards with movie details
function MovieList ({data}){
    return(
        <>
        <div className="card-list">
            {data.map(movie =>(
                <div className="" key={movie}>
                    <MovieCard name={movie.title} img={movie.image} rating={movie.rating}/>
            </div>
            ))}
        </div>
        </>
    )
}

export default MovieList