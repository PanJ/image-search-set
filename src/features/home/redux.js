import axios from "axios";
import { defineAction } from "redux-define";
const promiseStates = ["PENDING", "FULFILLED", "REJECTED"];
const define = defineAction("home").defineAction;
const SEARCH = define("SEARCH", promiseStates);

const initialState = {
  loading: false,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.PENDING:
      return {
        ...state,
        loading: true,
        results: []
      };
    case SEARCH.FULFILLED:
      return {
        ...state,
        loading: false,
        results: action.payload.data.results
      };
    case SEARCH.REJECTED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const search = query => ({
  type: SEARCH.ACTION,
  payload: axios.get("http://www.mocky.io/v2/5ac5d0ff4a00004e007e04e5")
});
