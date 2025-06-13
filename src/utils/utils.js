import genres from '../data/genres.js'
let genreArr = genres;  //in the event the genre array isn't fetched, the backup
let fetchedVideos;
const apiKey = import.meta.env.VITE_API_READ_ACCESS;

//reformats movie data into array with Title, Image, Rating
function parseMovieData(data) {
  let movieArr = [];
  
  fetchGenres()
  data.results.forEach((element) => {
    const movieObj = {
      id: element.id,
      title: element.original_title,
      image: element.poster_path,
      rating: element.vote_average,
      release_date: element.release_date,
      backdrop_img: element.backdrop_path,
      overview: element.overview,
      genres: genreString(element.genre_ids),
      liked: false
    };
    movieArr.push(movieObj);
  });
  return movieArr;
}

//helper function to convert genre codes into text
function genreString(arr){
  let string = ""
  let found
  arr.forEach(genreID => {
    found = genreArr.genres.find(i => i.id === genreID)
    string = string + `${found.name}, `
  })
  return string
}

//sets video field to include the id of the trailer


//fetchs data from API based on URL (URL changes display different data)
async function fetchDataHelper(url) {
  const fetchData = async () => {
    try {
      const response = await fetch(url,
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
      return dataFetched;
    } catch (err) {
      console.log(err);
    }
  };
  return(await fetchData())
}

//fetch genre information
async function fetchGenres() {
  try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',
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
      genreArr = dataFetched
      return genreArr;
    } catch (err) {
      genreArr = genres
      console.log(err);
      return genreArr
    }
}

//sort functions
//Sort A-Z
function sortAlphabetic( arr){
  return arr.sort((a, b) => a.title.localeCompare(b.title))
}
//Sort new-old
function sortReleaseDate(arr){
  return arr.sort(function (a,b){
      const date1 = new Date(a.release_date)
      const date2 = new Date(b.release_date)
      return date2-date1
    }
  )
}
//sort high-low
function sortByRating(arr){
  return arr.sort((a, b) => b.rating - a.rating)
}


export { parseMovieData, fetchDataHelper, sortAlphabetic, sortReleaseDate, sortByRating };
