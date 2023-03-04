import { GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_ALL_LOCATIONS, SEARCH_CLEAN, SEARCH_FAIL, SEARCH_SUCCESS, TOGGLE_THEME, SET_ACCESS } from "./action-types";    

const initialState = {

    userData: {
        username: 'infederico@gmail.com',
        password: 'henry12345'
    },
    access: false,
    
    theme: true,

    characters: [],
    allCharacters: [],

    episodes: [],
    allEpisodes: [],

    locations: [],
    allLocations: [],

    searchResult: {},
    resultDetailLink: '',
    errors: ''
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ACCESS:
            return {
                ...state,
                access: action.payload
            }
        case TOGGLE_THEME:
            return {
                ...state,
                theme: !state.theme
            }
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: action.payload
            }
        case GET_ALL_EPISODES:
            return {
                ...state,
                allEpisodes: action.payload
            }
        case GET_ALL_LOCATIONS:
            return {
                ...state,
                allLocations: action.payload
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                searchResult: action.payload,
                resultDetailLink: action.link,
                errors: ''
            }
        case SEARCH_FAIL:
            return {
                ...state,
                searchResult: {},
                errors: action.payload
            }
        case SEARCH_CLEAN:
            return {
                ...state,
                searchResult: {},
                errors: ''
            }
        default: 
            return {
                ...state
            }
    }
};

export default rootReducer;