import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import userDetailReducer from "./userDetailReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  users: userReducer,
  user: userDetailReducer,
  form: formReducer,
});

export default rootReducer;
