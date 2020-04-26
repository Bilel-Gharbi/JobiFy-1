const searchResults = (model) => {
  return async (req, res, next) => {
    const term = req.query.term;
    const filter = req.query.filter;
    //TODO:
    if (term || filter) {
      res.json(term, filter);
    } else next();

    /*     if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    } */
    /* try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    } */
  };
};

module.exports = searchResults;
