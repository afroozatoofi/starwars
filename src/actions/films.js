import { getFilms } from "../services/filmService";
import convertToRoman from "../utils/convertToRoman";

export const getAllFilms = () => {
  return async (dispatch) => {
    const { data } = await getFilms();

    data.results.map((item) => {
      item.title_num =
        "Episode " + convertToRoman(item.episode_id) + " - " ;
      item.episode_str = "EPISODE    " + item.episode_id;
      item.title_mix = item.title_num + item.title;
      return item;
    });

    await dispatch({ type: "INIT", payload: data.results });
  };
};
