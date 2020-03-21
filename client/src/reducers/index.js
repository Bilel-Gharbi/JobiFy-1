import { combineReducers } from "redux";

import resumeReducer from "./resumeReducer";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  resume: resumeReducer,
  jobs: jobsReducer,
  error: errorReducer
});
