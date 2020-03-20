import { combineReducers } from "redux";

import resumeReducer from "./resumeReducer";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  resume: resumeReducer,
  jobs: jobsReducer
});
