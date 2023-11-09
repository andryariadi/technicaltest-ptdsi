import { USER_FETCH_LOADING, USER_FETCH_SUCCESS, USER_FETCH_FAILED } from "../actions/actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_LOADING:
      console.log(state.users, "<<<<<<<didalammmm");
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      console.log(state.users, "<<<<<<<didalammmm");
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case USER_FETCH_FAILED:
      console.log(state.users, "<<<<<<<didalammmm");
      return {
        ...state,
        users: action.payload,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
