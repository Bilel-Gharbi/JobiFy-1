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
  };
};

module.exports = paginatedResults;
