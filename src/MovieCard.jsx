

function MovieCard (props) {
    return(
        <>
        <h3>Title: {props.name}</h3>
        <img src={`https://image.tmdb.org/t/p/w400${props.img}`}/>
        <p>Rating: {props.rating}</p>
        </>
    )
}

export default MovieCard