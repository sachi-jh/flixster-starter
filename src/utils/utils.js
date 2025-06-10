
function parseMovieData (data){
    let movieArr = []
    data.results.forEach(element => {
        const movieObj = {title: element.original_title,
                        image: element.poster_path, 
                        rating: element.vote_average} 
        movieArr.push(movieObj)
    });
    console.log(movieArr)
    return movieArr
}

export { parseMovieData }