const { jobOfferOperations } = require("../operations");

const searchResults = () => {
  return async (req, res, next) => {
    const term = req.query.term;
    const filter = req.query.filter;
    if (filter && term) {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      if (page && limit) {
        try {
          let result = await jobOfferOperations.getAllJoboffersByFilterAndSearch(
            filter,
            term,
            limit,
            page - 1
          );
          res.json({
            status: "sucess",
            message: "search jobOffer result ",
            length: result.count,
            data: result.rows,
          });
        } catch (err) {
          res.status(401).json(err);
        }
      } else {
        try {
          let result = await jobOfferOperations.getAllJoboffersByFilterAndSearch(
            filter,
            term
          );
          res.json({
            status: "sucess",
            message: "search jobOffer result ",
            length: result.count,
            data: result.rows,
          });
        } catch (err) {
          res.status(401).json(err);
        }
      }
    } else {
      next();
    }
  };
};

module.exports = searchResults;
