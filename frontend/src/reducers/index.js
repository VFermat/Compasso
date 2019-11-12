import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as dataReducer from "./data";
const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...dataReducer
  });
export default rootReducer;
