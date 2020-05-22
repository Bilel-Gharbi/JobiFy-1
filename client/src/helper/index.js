import * as _ from "underscore";

export const checkBeforApply = (jobId, applyedJobTab) => {
  /*  console.log(jobId);
  console.log(applyedJobTab); */
  return _.any(applyedJobTab, { JobOfferId: jobId });
};

export const checkBeforeSave = (jobId, savedJobsTab) => {
  return _.any(savedJobsTab, { id: jobId });
};

export const jobMatch = (resumeSkillsTab, jobOfferSkillsTab) => {
  //check how many Resume skills included in JobOffer skills
  let jobSkills = _.pluck(jobOfferSkillsTab, "name")
    .join(",")
    .toUpperCase()
    .split(",");

  let resumeSkills = _.pluck(resumeSkillsTab, "name")
    .join(",")
    .toUpperCase()
    .split(",");
  // return ratio by divded the number of skills included by the length of job offer skills
  return (
    (_.intersection(resumeSkills, jobSkills).length / jobSkills.length) * 100
  );
};

export const technlogiesTabGenerator = (technologiesString) => {
  let technologiesTab = technologiesString
    .replace(/[^A-Z0-9+]+/gi, "_")
    .split("_");

  return technologiesTab;
};

export const filterElementFromState = (arr, element) => {
  return arr.filter((el) => el.id !== element.id);
};

export const updateElementFromState = (arr, element) => {
  return arr.map((item) => {
    if (item.id !== element.id) {
      return item;
    }
    return {
      ...item,
      ...element,
    };
  });
};

export const addSkillToJobOffer = (state, skill) => {
  let jobOffer = state.filter((el) => el.id === skill.JobOfferId);
  jobOffer[0].jobSkills.push(skill);

  return [...jobOffer, ...state.filter((el) => el.id !== skill.JobOfferId)];
};

export const delSkillFromJobOffer = (state, skillId, jobId) => {
  let jobOffer = state.filter((el) => el.id === jobId);
  let newSkills = jobOffer[0].jobSkills.filter((skill) => skill.id !== skillId);

  jobOffer[0].jobSkills = newSkills;

  return [...jobOffer, ...state.filter((el) => el.id !== jobId)];
};
