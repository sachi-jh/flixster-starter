import './Modal.css'

//modal popup when card is clicked
const Modal = ({data, index, close}) => {
    return(
        <>
        {data.length && (
            <div id="Modal" className='modal'>
                    <div className="modal-content">
                        <h3>{data[index].title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w400${data[index].backdrop_img}`} alt={`{data[index].title} backdrop image`}/>
                        <p>Release Date: {data[index].release_date}</p>
                        <p>Overview: {data[index].overview}</p>
                        <p>Genres: {data[index].genres}</p>
                        <button onClick={close}>Close</button>
                    </div>
            </div>)
        }
        </>
    )
} 
export default Modal