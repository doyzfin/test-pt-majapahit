import axios from "axios";

export const getDataUser = () => {
  return {
    type: "GET_DATA",
    payload: axios.get("https://jsonplaceholder.typicode.com/posts"),
  };
};
