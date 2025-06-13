import './MovieCard.css'
import { useEffect, useState } from 'react'
//individual cards that have movie title, image, and rating
function MovieCard (props) {
    const[isLiked, setIsLiked] = useState(false)

    

    const likeMovie = (id) => {
        if(isLiked){
            
            const i = props.isLikedArr.indexOf(id)
            const arr = [...props.isLikedArr]
            arr.splice(i, 1)
            props.setIsLikedArr(arr)
        } else {
            props.setIsLikedArr([...props.isLikedArr, id])
        }
        
        setIsLiked(!isLiked)
    }

    useEffect(()=>{
        if(props.isLikedArr.includes(props.id)){
            setIsLiked(true)
        }
    }, [])

    return(
        <>
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w400${props.img}`} className='card-img' alt={`${props.name} poster`}/>
            <h3>{props.name}</h3>
            <p>Rating: {props.rating}</p>
            <button onClick={()=>{likeMovie(props.id)}}><i className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart`} value="like"></i></button>
        </div>
        </>
    )
}

export default MovieCard