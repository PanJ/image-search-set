import { combineReducers } from "redux";
import home from "../features/home/redux";
import photo from "../features/photo/redux";

export default combineReducers({
  home,
  photo
});
