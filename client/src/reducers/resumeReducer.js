/*  reducer is a function that take 2 arguments 
the first one is initial state and the second one is the action 
there is some STRICT rules to follow 
 */
const resumeReducer = (initialState = [], action) => {
  switch (action.type) {
    case "FETCH_CV":
      return [...action.payoad];

    default:
      return initialState;
  }
};

export default resumeReducer;
