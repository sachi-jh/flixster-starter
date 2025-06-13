import { useState } from "react"
import MovieCard from "./MovieCard"
import Modal from "./Modal"
import './MovieList.css'


//component that renders the whole grid of cards with movie details
function MovieList ({data, isLikedArr, setIsLikedArr, isWatchedArr, setIsWatchedArr, loadMoreButtonClick}){
    const[modalID, setModalID] = useState(0);
    const[isVisible, setisVisible] = useState(false)

    const close = () =>{
        setisVisible(false)
    }

    const openCardModal = (event, index) => {
        if (event.target.getAttribute("value")!=="like" && event.target.getAttribute("value")!=="watch"){
            setModalID(index)
            setisVisible(true)
            event.stopPropagation()
        }
    }

    
    
    return(
        <>
        <div>
            <div className="card-list">
                {data.map((movie, i) =>(
                    <div className="card" key={movie.id} onClick={(event)=>openCardModal(event, movie.id)}>
                        <MovieCard data={data} id={movie.id} name={movie.title} img={movie.image} rating={movie.rating} isLikedArr={isLikedArr} setIsLikedArr={setIsLikedArr} isWatchedArr={isWatchedArr} setIsWatchedArr={setIsWatchedArr}/>
                    </div>
                ))}
                {isVisible &&
                    <div className={isVisible ? 'shown' : 'hidden'}>
                    <Modal data={data.find(x => x.id === modalID)} close={close}/>
                    </div>
                }
                
            </div>
            {loadMoreButtonClick && <button id="movie-button" onClick={loadMoreButtonClick}>Load More</button>}
        </div>
        </>
    )
}

export default MovieList