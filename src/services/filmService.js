import http from "./httpService";
import config from "./config.json";
/**
 *
 * @returns list of all films from API
 */
export const getFilms = () => {
  return http.get(`${config.etraveligroup}/api/films`);
};
