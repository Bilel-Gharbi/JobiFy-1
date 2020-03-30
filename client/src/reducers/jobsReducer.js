const initialState = {
  jobs: [],
  jobDetails: {}
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOBS":
      return { ...state, ...action.payload };

    case "SET_DEFAULT_JOB_DETAILS":
      return { ...state, ...action.payload };

    case "FETCH_JOB_DETAILS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default jobsReducer;
