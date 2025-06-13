import './Modal.css'
import {useEffect, useState} from 'react'
const apiKey = import.meta.env.VITE_API_READ_ACCESS;

//modal popup when card is clicked
const Modal = ({data, close}) => {
    const [trailerKey, setTrailerKey] = useState();
    
    useEffect(()=>{
        async function fetchMovieTrailers(id){
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                    {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization:
                        `Bearer ${apiKey}`,
                    },
                    }
                );
                const dataFetched = await response.json();
                return dataFetched
                } catch (err) {
                console.log(err);
                }
        }
        async function videoData(id){
            const arr = await fetchMovieTrailers(id)
            const key = arr.results.find(x => x.type === 'Trailer')
            console.log(arr)
            if (key){
                setTrailerKey(key.key)
            } else {
                setTrailerKey(0)
            }

        }

        videoData(data.id)
    }, [])

    return(
        <>
        {data && (
            <div id="Modal" className='modal'>
                    <div className="modal-content">
                        <h3>{data.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w400${data.backdrop_img}`} alt={`${data.title} backdrop image`}/>
                        <p>Release Date: {data.release_date}</p>
                        <p>Overview: {data.overview}</p>
                        <p>Genres: {data.genres}</p>
                        {trailerKey!==0 && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}`} 
                                                    title="YouTube video player" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                    ></iframe>}
                        <button className="close" onClick={close}>Close</button>
                    </div>
            </div>)
        }
        </>
    )
} 
export default Modal