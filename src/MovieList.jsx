import MovieCard from "./MovieCard"
import { parseMovieData } from "./utils/utils"

function MovieList ({data}){
    const formattedData = parseMovieData(data)
    //console.log(formattedData)
    return(
        <>
        <div>
            {formattedData.map(movie =>(
                <div key={movie}>
                    <MovieCard name={movie.title} img={movie.image} rating={movie.rating}/>
                </div>
            ))}
        </div>
        </>
    )
}

export default MovieList