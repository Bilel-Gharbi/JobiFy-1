import { combineReducers } from "redux";

import resumeReducer from "./resumeReducer";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import companyProfileReducer from "./companyProfileReducer";
import userProfileReducer from "./userProfileReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
  userProfile: userProfileReducer,
  companyProfile: companyProfileReducer,
  resume: resumeReducer,
  error: errorReducer,
  UI: uiReducer,
});
