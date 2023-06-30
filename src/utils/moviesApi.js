import axios from "axios";

const apiKey = 'db72d38d20c1dc1059bf7641ac643add';

export const search = (query) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    )
    .then(({ data }) => data);