import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
});

export default rootReducer;
