import MovieCard from "./MovieCard"
import { parseMovieData } from "./utils/utils"
import './MovieList.css'

function MovieList ({data}){
    const formattedData = parseMovieData(data)
    //console.log(formattedData)
    return(
        <>
        <div className="card-list">
            {formattedData.map(movie =>(
                <div className="" key={movie}>
                    <MovieCard name={movie.title} img={movie.image} rating={movie.rating}/>
            </div>
            ))}
        </div>
        </>
    )
}

export default MovieList