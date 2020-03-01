import { GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILURE, GET_CHARACTERS, SHOW_MORE, SHOW_LESS} from '../actions/types';

const initialState = {
  characters: [],
  error: false,
  isLoading: false,
  loadMore: false,
  characterToLoad: "",
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      }
    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    case GET_CHARACTERS:
      return {
        ...state,
        isLoading: true,
      }
    case SHOW_MORE:
      return {
        ...state,
        loadMore: true,
        characterToLoad: action.payload,
      }
    case SHOW_LESS:
      return {
        ...state,
        loadMore: false,
      }
    default:
      return {
        state
      }
  }
};