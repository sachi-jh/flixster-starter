//reformats movie data into array with Title, Image, Rating
function parseMovieData(data) {
  let movieArr = [];
  data.results.forEach((element) => {
    const movieObj = {
      title: element.original_title,
      image: element.poster_path,
      rating: element.vote_average,
    };
    movieArr.push(movieObj);
  });
  return movieArr;
}


async function fetchDataHelper(url) {
  const fetchData = async () => {
    try {
      const response = await fetch(url,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGUxNWE4ZWJkMDY5ZWQzMTE4NWZiMTViM2U3MGQ4NyIsIm5iZiI6MTc0OTUwNjQxNi4zODksInN1YiI6IjY4NDc1OTcwMjQyY2VkMGE5ZTM0MmI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yn3WDx76rA2jgb_7-nhXBNJDv8V-l8lhEIRul_-c76o",
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

export { parseMovieData, fetchDataHelper };
