const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DATA_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case "GET_DATA_REJECTED":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
export default getData;
