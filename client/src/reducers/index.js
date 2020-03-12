import { combineReducers } from "redux";

import resumeReducer from "./resumeReducer";
import jobsReducer from "./jobsReducer";

export default combineReducers({
  resume: resumeReducer,
  jobs: jobsReducer
});
