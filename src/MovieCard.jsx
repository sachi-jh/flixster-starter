import './MovieCard.css'
//individual cards that have movie title, image, and rating
function MovieCard (props) {
    return(
        <>
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w400${props.img}`}/>
            <h3>{props.name}</h3>
            <p>Rating: {props.rating}</p>
        </div>
        </>
    )
}

export default MovieCard