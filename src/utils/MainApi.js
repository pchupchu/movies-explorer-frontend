import { BASE_URL } from "./constants";
import { MOVIES_URL } from "./constants";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email, name }),
  }).then((res) => checkRes(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkRes(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => checkRes(res))
    .then((data) => data);
};

export const getProfileInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
};

export const setProfileInfo = (user) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  }).then((res) => checkRes(res));
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
};

export const setNewMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movie.country,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      director: movie.director,
      year: movie.year,
      duration: movie.duration,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: `${MOVIES_URL}${movie.image.url}`,
      movieId: movie.id,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
    }),
  }).then((res) => checkRes(res));
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
};
