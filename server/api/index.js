//import all router here
const userRouter = require("./user");
const resumeRouter = require("./resume");
const companyRouter = require("./company");
const jobOfferRouter = require("./jobOffer");
const authRouter = require("./auth");

module.exports = {
  authRouter,
  userRouter,
  resumeRouter,
  companyRouter,
  jobOfferRouter
};
