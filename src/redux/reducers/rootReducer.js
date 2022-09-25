import { combineReducers } from "redux";
import mode from "./modeReducer";

const rootReducer = combineReducers({
  mode: mode,
});

export default rootReducer;
