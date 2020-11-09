let movies = [
  {
    id: 1,
    name: "Star Wars",
    score: 44,
  },
  {
    id: 2,
    name: "Avengers",
    score: 8,
  },
  {
    id: 3,
    name: "Godfather",
    score: 99,
  },
  {
    id: 4,
    name: "Interstella",
    score: 5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;

  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
