import { useState } from "react"
import MovieCard from "./MovieCard"
import Modal from "./Modal"
import './MovieList.css'


//component that renders the whole grid of cards with movie details
function MovieList ({data, isLikedArr, setIsLikedArr}){
    const[modalID, setModalID] = useState(0);
    const[isVisible, setisVisible] = useState(false)

    const close = () =>{
        setisVisible(false)
    }

    const openCardModal = (event, index) => {
        if (event.target.getAttribute("value")!=="like"){
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
                    <div>
                    <div className="" key={movie.id} onClick={(event)=>openCardModal(event, movie.id)}>
                        <MovieCard id={movie.id} name={movie.title} img={movie.image} rating={movie.rating} isLikedArr={isLikedArr} setIsLikedArr={setIsLikedArr}/>
                    </div>
                    
                    </div>
                ))}
                {isVisible &&
                    <div className={isVisible ? 'shown' : 'hidden'}>
                    <Modal data={data.find(x => x.id === modalID)} close={close}/>
                    </div>
                }
                
            </div>
            
        </div>
        </>
    )
}

export default MovieList