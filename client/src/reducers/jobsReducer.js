const jobsReducer = (initialState = [], action) => {
  switch (action.type) {
    case "FETCH_JOBS":
      return [...action.payload];

    default:
      return initialState;
  }
};

export default jobsReducer;
