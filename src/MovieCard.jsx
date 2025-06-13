import './MovieCard.css'
import { useEffect, useState } from 'react'
//individual cards that have movie title, image, and rating
function MovieCard (props) {
    const[isLiked, setIsLiked] = useState(false)
    const[isWatched, setIsWatched] = useState(false)
    

    const likeMovie = (id) => {
        if(isLiked){
            const i = props.isLikedArr.indexOf(props.data.id)
            const arr = [...props.isLikedArr]
            arr.splice(i, 1)
            props.setIsLikedArr(arr)
        } else {
            props.setIsLikedArr([...props.isLikedArr, props.data.find(x => x.id === id)])
        }
        
        setIsLiked(!isLiked)
    }

    const watchMovie = (id) => {
        if(isWatched){
            const i = props.isWatchedArr.indexOf(props.data.id)
            const arr = [...props.isWatchedArr]
            arr.splice(i, 1)
            props.setIsWatchedArr(arr)
        } else {
            props.setIsWatchedArr([...props.isWatchedArr, props.data.find(x => x.id === id)])
        }
        setIsWatched(!isWatched)
    }

    useEffect(()=>{
        if(props.isLikedArr.some(x => x.id === props.id)){
            setIsLiked(true)
        }
        if(props.isWatchedArr.some(x => x.id === props.id)){
            setIsWatched(true)
        }
    }, [])

    return(
        <>
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w400${props.img}`} className='card-img' alt={`${props.name} poster`}/>
            <h3>{props.name}</h3>
            <p>Rating: {props.rating}</p>
            <button onClick={()=>{likeMovie(props.id)}}><i className={`${isLiked ? "fa-solid red" : "fa-regular"} fa-heart`} value="like"></i></button>
            <button onClick={()=>{watchMovie(props.id)}}><i className={`${isWatched ? "fa-solid green" : "fa-regular"} fa-circle-play`} value="watch"></i></button>
        </div>
        </>
    )
}

export default MovieCard