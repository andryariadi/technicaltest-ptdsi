import { USERDETAIL_FETCH_LOADING, USERDETAIL_FETCH_SUCCESS, USERDETAIL_FETCH_FAILED } from "../actions/actionType";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case USERDETAIL_FETCH_LOADING:
      console.log(state.user, "<<<<<<<didetailllll");
      return {
        ...state,
        loading: true,
      };
    case USERDETAIL_FETCH_SUCCESS:
      console.log(state.user, "<<<<<<<didetailllllreducerrr");
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case USERDETAIL_FETCH_FAILED:
      console.log(state.user, "<<<<<<<didetailllll");
      return {
        ...state,
        user: action.payload,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
