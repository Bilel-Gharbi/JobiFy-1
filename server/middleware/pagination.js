const paginatedResults = (operation) => {
  return async (req, res, next) => {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const { count, rows } = await operation(limit, (page - 1) * limit);

      try {
        res.json({
          status: "sucess",
          message: "paginated jobOffer result ",
          length: count,
          data: rows,
        });
      } catch (err) {
        res.status(401).json(err);
      }
    } else {
      next();
    }

    //TODO:
    /*  const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
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
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    } */
  };
};

module.exports = paginatedResults;
