import { useState } from "react"
import MovieCard from "./MovieCard"
import Modal from "./Modal"
import './MovieList.css'


//component that renders the whole grid of cards with movie details
function MovieList ({data}){
    const[modalID, setModalID] = useState(0);
    const[isVisible, setisVisible] = useState(false)

    const close = () =>{
        setisVisible(false)
    }

    const cardModal = (index) => {
        setModalID(index)
        setisVisible(true)
    }
    
    return(
        <>
        <div>
            <div className="card-list">
                {data.map((movie, i) =>(
                    <div className="" key={i} onClick={()=>cardModal(i)}>
                        <MovieCard name={movie.title} img={movie.image} rating={movie.rating}/>
                    </div>
                ))}
                <div className={isVisible ? 'shown' : 'hidden'}>
                    <Modal data={data} index={modalID} close={close}/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default MovieList