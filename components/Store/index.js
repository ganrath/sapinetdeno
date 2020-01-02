import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback
} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useFetch from "../customHook/useFetch";

export const StoreContext = React.createContext();
export const DispatchContext = React.createContext();

const initialState = {
  list: [],
  listerror: null,
  sortResult: [],
  filterResult: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return Object.assign({}, state, {
        list: action.payload,
        sortResult: action.payload,
        listerror: "false"
      });
    case "FETCH_ERROR":
      return Object.assign({}, state, {
        listerror: action.payload
      });

    case "FETCH_SEARCH_RESULT":
      let result = "";
      if (state.filterResult.length === 0) {
        return state;
      } else {
        result = state.list.filter(item => {
          for (let val in state.filterResult) {
            if (
              state.filterResult[val] == "unknown" ||
              state.filterResult[val] == "Post-Apocalyptic Earth" ||
              state.filterResult[val] == "Nuptia 4" ||
              state.filterResult[val] == "Other origins"
            ) {
              if (item.origin.name === state.filterResult[val]) {
                return true;
              }
            } else if (
              state.filterResult[val] == "Male" ||
              state.filterResult[val] == "Female"
            ) {
              if (item.gender === state.filterResult[val]) {
                return true;
              }
            } else if (
              state.filterResult[val] == "Human" ||
              state.filterResult[val] == "Mytholog"
            ) {
              if (item.species === state.filterResult[val]) {
                return true;
              }
            } else if (state.filterResult[val] == "Other Species") {
              if (item.species !== "Human" && item.species !== "Mytholog") {
                return true;
              }
            }
          }
        });
        return Object.assign({}, state, {
          sortResult: result
        });
      }

    // console.log(result);

    case "CHECKBOX_SELECT":
      state.filterResult.push(action.payload);
      return state;
    case "CHECKBOX_REMOVE":
      let result_index = state.filterResult.indexOf(action.payload);
      state.filterResult.splice(result_index, 1);
      return state;
    default:
      return state;
  }
}
// const fetchData = async () => {
//   let response = await fetch(url);
//   let data = await response.json();
//   return data.results;
// };
// function fetchData() {
//   return new Promise(function(res, rej) {
//     res("initResolve");
//   });
// }
export function StoreProvider({ children }) {
  let url = "https://rickandmortyapi.com/api/character/";
  // let url = "https://jsonplaceholder.typicode.com/todos/";
  const [state, dispatch] = useReducer(reducer, initialState);
  // let daata = [{ name: "Rick Sanchez" }, "Volvo", "BMW"];
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let data = await response.json();
      return data.results;
    }
    fetchData()
      .then(data => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch(function(err) {
        dispatch({ type: "FETCH_ERROR", payload: true });
      });
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
}
