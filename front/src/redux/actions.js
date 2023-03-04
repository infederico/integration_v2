import { GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_ALL_LOCATIONS, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_CLEAN, TOGGLE_THEME, SET_ACCESS } from "./action-types";
import axios from 'axios';
import { urlCharacters, urlEpisodes, urlLocations } from "../assets/ApiUrls/urls";

// export const getAllCharacters = () => {
//     return async function (dispatch) {
//         let response = await axios.get(urlCharacters);
//         dispatch({ type: GET_ALL_CHARACTERS, payload: response.data })
//     }
// };

export const getAllCharacters = (page = 1) => async (dispatch) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllEpisodes = () => {
    return async function (dispatch) {
        let response = await axios.get(urlEpisodes);
        dispatch({ type: GET_ALL_EPISODES, payload: response.data })
    }
};

export const getAllLocations = () => {
    return async function (dispatch) {
        let response = await axios.get(urlLocations);
        dispatch({ type: GET_ALL_LOCATIONS, payload: response.data })
    }
};

export const search = (query, option) => async (dispatch) => {
    
    try {
        let endpoint = '';

        if (option === 'characters') {
          endpoint = urlCharacters;
        } else if (option === 'episodes') {
          endpoint = urlEpisodes;
        } else if (option === 'locations') {
          endpoint = urlLocations;
        }

        const resultDetailLink = `${endpoint}/${query}`;
        const res = await axios.get(`${endpoint}/${query}`);
        
        dispatch({
          type: SEARCH_SUCCESS,
          payload: res.data,
          link: resultDetailLink
        });
      } catch (error) {
        dispatch({
          type: SEARCH_FAIL,
          payload: 'id not found for the option choosed',
        });
      }
    };

    export const searchClean = () => {
      return { type: SEARCH_CLEAN }
};

export const toggleTheme = () => {
  return { type: TOGGLE_THEME }
};

export const setAccess = (access) => {
  return { type: SET_ACCESS, payload: access }
};