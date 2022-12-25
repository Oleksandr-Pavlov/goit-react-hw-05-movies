const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = '3ab3f6572c3def6f6cf5801fb6522013';

export function fetchTrendingMovies() {
  return fetch(`${BASE_URL}?page=1&api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('Fail');
    }

    return response.json();
  });
}