import { combineReducers } from "redux";
import productsReducer from "../store/products/reducer";

// import

export default combineReducers({
  products: productsReducer
});
