import * as _ from "underscore";

export const checkBeforApply = (jobId, applyedJobTab) => {
  return _.any(applyedJobTab, { JobOfferId: jobId });
};
