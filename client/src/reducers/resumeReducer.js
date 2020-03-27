/*  reducer is a function that take 2 arguments 
the first one is initial state and the second one is the action 
there is some STRICT rules to follow 
 */
const initialState = {};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESUME":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default resumeReducer;
