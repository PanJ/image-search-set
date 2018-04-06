import axios from "axios";
import { defineAction } from "redux-define";
const promiseStates = ["PENDING", "FULFILLED", "REJECTED"];
const define = defineAction("photo").defineAction;
const GET = define("GET", promiseStates);

const initialState = {
  loading: false,
  result: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET.PENDING:
      return {
        ...state,
        loading: true
      };
    case GET.FULFILLED:
      return {
        ...state,
        loading: false,
        result: action.payload.data
      };
    case GET.REJECTED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const get = id => ({
  type: GET.ACTION,
  payload: axios.get("http://www.mocky.io/v2/5ac5ebd24a00004b007e053f")
});
