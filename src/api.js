// eslint-disable-next-line no-unused-vars
// api.js
export const fetchMovies = async () => {
const baseUrl = 'https://api.themoviedb.org/3/discover'
 const apiKey ="b070cebc8c59293d8474dce11aa0bec2";
  try {
    const response = await fetch(baseUrl + `/movie?api_key=${apiKey}`);
    // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Error fetching movies');
    }
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// get Movies
// modificar parametros url

